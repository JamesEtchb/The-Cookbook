import { dbconnect } from "./connect";
import { Timestamp } from "firebase-admin/firestore";

export function getAfrican(req, res) {
    const db = dbconnect()
    db.collection('african')
    .get()
    .then((collection) => {
        const african = collection.docs.map((doc) => doc.data())
        res.send(african)
    })
    .catch((err) => res.status(500).send(err.message))
}

export function addAfrican(req, res) {
    const db = dbconnect()
    const newAfrican = req.body
    newAfrican.createAt = Timestamp.now()

    db.collection('african')
    .add(newAfrican)
    .then((doc) => {
        res.status(200).send({
            success: true,
            id: doc.id,
        })
    })
    .catch((err) => res.status(500).send(err.message))
}