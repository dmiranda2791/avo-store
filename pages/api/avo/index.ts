import { IncomingMessage, ServerResponse } from "http";
import DB from "@database";

const allAvos = async (req: IncomingMessage, res: ServerResponse) => {
  const db = new DB();
  const allAvos = await db.getAll();
  const length = allAvos.length;
  res.statusCode = 200;
  res.setHeader('Content-type', 'application/json');
  res.end(JSON.stringify({ data: allAvos, length }));
}

export default allAvos;