import mongoose,{ Document, Model, Schema } from 'mongoose';

// define the user interface
interface IUser extends Document {
    name: string;
    email: string;
    password?: string;
    id: string;
}

const UserSchema: Schema<IUser> = new Schema({
  name: { type: String, required: true },
    email: { type: String, required: true , unique: true },
    password: { type: String, required: false },
})

// export the User model
const User: Model<IUser> = mongoose.models.User || mongoose.model('User', UserSchema);

export default User;