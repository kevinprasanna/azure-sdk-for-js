// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { TableServiceClient, TableClient } from "@azure/data-tables";

// Load the .env file if it exists
import * as dotenv from "dotenv";
dotenv.config();

const accountSas = process.env["ACCOUNT_SAS"] || "";
const accountName = process.env["ACCOUNT_NAME"] || "";

async function listTables() {
  const accountUrl = `https://${accountName}.table.core.windows.net${accountSas}`;
  const client = new TableServiceClient(accountUrl);

  const tables = client.listTables();

  for await (let table of tables) {
    console.log(table);
    // {TableName: "TestTable"}
  }
}

async function listEntities() {
  const accountUrl = `https://${accountName}.table.core.windows.net${accountSas}`;
  const tableName = "test1";
  const client = new TableClient(accountUrl, tableName);

  const entities = client.listEntities();

  for await (const entity of entities) {
    console.log(entity);
    // {partitionKey: "P1", rowKey: "R1", foo: "Bar"}
  }
}

async function main() {
  await listTables();
  await listEntities();
}

main().catch(console.error);
