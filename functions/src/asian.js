import { dbconnect } from "./connect";
import { Timestamp } from "firebase-admin/firestore";

export function getAsian(req, res) {
    const db = dbconnect()
    db.collection('asian')
    .get()
    .then((collection) => {
        const asian = collection.docs.map((doc) => doc.data())
        res.send(asian)
    })
    .catch((err) => res.status(500).send(err.message))
}

export function addAsian(req, res) {
    const db = dbconnect()
    const newAsian = req.body
    newAsian.createAt = Timestamp.now()

    db.collection('asian')
    .add(newAsian)
    .then((doc) => {
        res.status(200).send({
            success: true,
            id: doc.id,
        })
    })
    .catch((err) => res.status(500).send(err.message))
}