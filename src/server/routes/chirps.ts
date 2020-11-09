import * as express from "express";
import {
  GetChirps,
  GetChirp,
  UpdateChirp,
  CreateChirp,
  DeleteChirp,
} from "../utils/chirpstore";

const router = express.Router();

router.get("/", (req: Express.Request, res: express.Response) => {
  let data = GetChirps();
  const chirps = Object.keys(data).map((key) => {
    return {
      id: key,
      user: data[key].user,
      text: data[key].text,
    };
  });

  chirps.pop();
  res.json(chirps);
});

router.get("/:id", (req, res) => {
  let id = req.params.id;
  const data = GetChirp(id)
  const chirp = {
    id: id,
    user: data.user,
    text: data.text
  }
  res.send(JSON.stringify(chirp));
});

router.post("/", (req, res) => {
    CreateChirp({
    user: req.body.user,
    text: req.body.text,
  });
  res.sendStatus(200);
});

router.put("/:id", (req, res) => {
    UpdateChirp(req.params.id, req.body);
  res.sendStatus(200);
});

router.delete("/:id", (req, res) => {
  DeleteChirp(req.params.id);
  res.sendStatus(200);
});

export default router;