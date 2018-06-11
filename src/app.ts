import * as AWS from 'aws-sdk'
import * as express from 'express'
import { Item } from './model/Item'
import { Site } from './model/Site'
import { sequelize } from './sequelize'

const app = express()

app.listen(3000, () => {
  console.log('Example app listening on port 3000!')
})

app.get('/', async (req, res) => {
  res.write('<h1>Hello World!</h1>')

  const notebook: Item = new Item()
  notebook.name = 'mjlq2'
  notebook.price = 2000
  notebook.currency = '$'
  notebook.source = Site.ROZETKA

  await sequelize.sync({ force: true })
   /*
   AWS.config.loadFromPath('credentials.json')

    const sqs = new AWS.SQS({
        apiVersion: '2012-11-05'
    })

    sqs.listQueues({}, (err, data) => {
        if (err) {
            console.log("Error", err);
        } else {
            console.log("Success", data.QueueUrls);
        }
    })

    const queueURL = "https://sqs.us-east-2.amazonaws.com/285227982020/headhunter";

    const params = {
        AttributeNames: [
            "SentTimestamp"
        ],
        MaxNumberOfMessages: 1,
        MessageAttributeNames: [
            "All"
        ],
        QueueUrl: queueURL,
        VisibilityTimeout: 0,
        WaitTimeSeconds: 0
    };

    sqs.receiveMessage(params, (err, data) => {
        if (err) {
            console.log("Receive Error", err);
        } else if (data.Messages) {
            const deleteParams = {
                QueueUrl: queueURL,
                ReceiptHandle: data.Messages[0].ReceiptHandle
            };

            console.log(data)
            */

            // TODO handle incompatibility
            // sqs.deleteMessage(deleteParams, (err, data) => {
            //     if (err) {
            //         console.log("Delete Error", err);
            //     } else {
            //         console.log("Message Deleted", data);
            //     }
            // });
    //     }
    // })

})
