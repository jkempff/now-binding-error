import bcrypt from "bcrypt";

export default (_req, res) => {
  bcrypt.hash(Math.random().toString(), 12, (err, encrypted) => {
    if (err) {
      return res.status(500).json({ message: err.message });
    }

    return res.status(200).json({ message: encrypted });
  });
};
