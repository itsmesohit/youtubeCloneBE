import mongoose,{Schema} from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const videoSchema = new Schema({
    title:{
        type: String,
        required: true,
        trim: true,
        index: true
    },
    description:{
        type: String,
        required: true,
        trim: true,
    },
    thumbnail:{
        type: String, // cloudinary url
        required: true,
    },
    videoFile:{
        type: String, // cloudinary url
        required: true,
    },
    duration:{
        type: Number, // 
        required: true,
    },
    views:{
        type: Number,
        default: 0
    },
    isPublished:{
        type: Boolean,
        default: false
    }
    likes:{
        type: Number,
        default: 0
    },
    dislikes:{
        type: Number,
        default: 0
    },
    comments:[{
        type: Schema.Types.ObjectId,
        ref: 'Comment'
    }],
    owner:{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }

},{timestamps: true});

videoSchema.plugin(mongooseAggregatePaginate);

export const Video = mongoose.model('Video', videoSchema);