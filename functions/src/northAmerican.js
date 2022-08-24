import { dbconnect } from "./connect";
import { Timestamp } from "firebase-admin/firestore";

export function getNorthAmerican(req, res) {
    const db = dbconnect()
    db.collection('northAmerican')
    .get()
    .then((collection) => {
        const northAmerican = collection.docs.map((doc) => doc.data())
        res.send(northAmerican)
    })
    .catch((err) => res.status(500).send(err.message))
}

export function addNorthAmerican(req, res) {
    const db = dbconnect()
    const newNorthAmerican = req.body
    newNorthAmerican.createAt = Timestamp.now()

    db.collection('northAmerican')
    .add(newNorthAmerican)
    .then((doc) => {
        res.status(200).send({
            success: true,
            id: doc.id,
        })
    })
    .catch((err) => res.status(500).send(err.message))
}