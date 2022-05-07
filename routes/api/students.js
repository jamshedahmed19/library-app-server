const express = require("express");
const router = express.Router();
const db = require("../../database/index");

router.get("/", (req, res) => {
    db.select().from("students")
        .then(students => {
            res.send(students);
        })
        .catch(err => {
            res.status(500).json({ error: "something went wrong" });
        });
});

router.post("/", (req, res) => {
    db.insert(req.body).returning("*").into("students")
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).json({ error: "something went wrong" });
        });
});

router.patch("/:id", (req, res) => {
    db("students").where({student_id: req.params.id}).update(req.body).returning("*")
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).json({ error: "something went wrong" });
        });
});
router.delete("/:id", (req, res) => {
    db("students").where({student_id: req.params.id}).del()
        .then(() => {
            res.json({ success: true });
        })
        .catch(err => {
            res.status(500).json({ error: "something went wrong" });
        });
});

router.get("/:id", (req, res) => {
    db("students").where({student_id: req.params.id}).select()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).json({ error: "something went wrong" });
        });
});

module.exports = router;