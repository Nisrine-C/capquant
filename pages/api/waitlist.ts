import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, email, phone, country } = req.body;

  if (!name || !email || !phone || !country) {
    return res.status(400).json({ error: "Missing fields" });
  }

  try {
    const existing = await prisma.waitlistEntry.findUnique({
      where: { email },
    });

    if (existing) {
      return res.status(400).json({ error: "Email already registered" });
    }

    const entry = await prisma.waitlistEntry.create({
      data: { name, email, phone, country },
    });

    return res.status(201).json(entry);
  } catch (error) {
    console.error("API Error:", error);
    return res.status(500).json({ error: "Server error" });
  }
}
