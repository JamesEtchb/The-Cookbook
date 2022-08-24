import { dbconnect } from "./connect";
import { Timestamp } from "firebase-admin/firestore";

export function getEuropean(req, res) {
    const db = dbconnect()
    db.collection('european')
    .get()
    .then((collection) => {
        const european = collection.docs.map((doc) => doc.data())
        res.send(european)
    })
    .catch((err) => res.status(500).send(err.message))
}

export function addEuropean(req, res) {
    const db = dbconnect()
    const newEuropean = req.body
    newEuropean.createAt = Timestamp.now()

    db.collection('european')
    .add(newEuropean)
    .then((doc) => {
        res.status(200).send({
            success: true,
            id: doc.id,
        })
    })
    .catch((err) => res.status(500).send(err.message))
}