import { DynamoDB, Endpoint} from 'aws-sdk';
import { InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { identity } from 'rxjs';

var AWS = require('aws-sdk');
AWS.config.update({region:'us-east-2'});
const ddb = new AWS.DynamoDB({ apiVersion: '2012-08-10' });

ddb.endpoint = new AWS.Endpoint('http://localhost:8000');

export class ProductRepository{
    constructor(){}

    async createProduct(name: string, description: string, price: number){

        var id: string = uuid();
        var priceParam: string = price.toString();
        try {
            const params = {
                TableName: "Products",
                Item: {
                    PKey: {
                       S: id
                    },
                    name: {
                        S: name
                    },
                    description: {
                        S: description
                    },
                    price: {
                        "N": priceParam
                    }
                }
            };

            ddb.putItem(params, (err, data) => {
                if(err)  throw new InternalServerErrorException(err);
                else return data;
            })
            return id;
        } catch (error) {
            throw new InternalServerErrorException(error);
        }
    }

  
}