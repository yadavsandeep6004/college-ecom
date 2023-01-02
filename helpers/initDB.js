// IgqKJUoRIaZp6Vv1

import mongoose from "mongoose";



function initDB() {
    if (mongoose.connections[0].readyState) {
        console.log('alredy connected')
        return
    }

    mongoose.connect(process.env.mongo_url, {
        useNewUrlParser: true,
        useUnifiedTopoLogy: true
    })
    mongoose.connection.on('connected', () => {
        console.log('connected to mongo')
    })

    mongoose.connection.on('error', (err) => {
        console.log('error connecting', err)
    })
}

export default initDB