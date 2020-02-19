import mqtt, {
    // IClientPublishOptions
} from "mqtt";

const optionsClient = {
    host: 'mqtt.flespi.io',
    username: 'e0rGtEceL0eP6e1WYkvAfWDCF2pvhvKjjZPCtQG4EJHBNynzHHXMrrdWhqgmLQtU'
}
// const optionsPublish: IClientPublishOptions = {
//     qos: 0,
//     retain: true,
// }
const client = mqtt.connect(optionsClient);

export default client;
