import { dbconnect } from "./connect";
import { Timestamp } from "firebase-admin/firestore";

export function getLatin(req, res) {
    const db = dbconnect()
    db.collection('latin')
    .get()
    .then((collection) => {
        const latin = collection.docs.map((doc) => doc.data())
        res.send(latin)
    })
    .catch((err) => res.status(500).send(err.message))
}

export function addLatin(req, res) {
    const db = dbconnect()
    const newLatin = req.body
    newLatin.createAt = Timestamp.now()

    db.collection('latin')
    .add(newLatin)
    .then((doc) => {
        res.status(200).send({
            success: true,
            id: doc.id,
        })
    })
    .catch((err) => res.status(500).send(err.message))
}