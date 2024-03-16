import mongoose from "mongoose";
import {Schema} from "mongoose";

const subscriptionSchema = new Schema({
    subscriber:{
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    channel:{
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    status:{
        type: String,
        enum: ['subscribed', 'blocked'],
        default: 'subscribed'
    }
},{timestamps: true});

export const Subscription = mongoose.model('Subscription', subscriptionSchema);