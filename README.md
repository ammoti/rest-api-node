# Rest-API Node

Rest-API-Node is a simple node web api. I used MongoDB as a database and schemas inspired from simple Northwind tables.

## Installation
First of all create a .env file for database settings. For this you can use ".example.env".

After that you can up MongoDB using docker-compose.

```bash
docker-compose up
```
after that simply install node packages.
```bash
npm i
```

## Usage
After all things done just start 
```bash
npm run dev
```
## Database 
As a mentinoned we use MongoDB and tables and columns like that,
| Users    |   | Suppliers    |   | Products       |   | Orders      |   | OrderItems |
|----------|---|--------------|---|----------------|---|-------------|---|------------|
| name     |   | companyName  |   | productName    |   | orderDate   |   | quantity   |
| lastName |   | contactName  |   | imageUrl       |   | orderNumber |   | unitPrice  |
| email    |   | contactTitle |   | unitPrice      |   | totalAmount |   | OrderId    |
| password |   | phone        |   | packageName    |   | UserId      |   | ProductId  |
|          |   |              |   | isDiscontinued |   |             |   |            |
|          |   |              |   | SupplierId     |   |             |   |            |

## API Endpoints
### Auth
`/v1/authenticate` POST Method you can pass body parameter email and password then it return a valid token.

`/v1/register` POST Method you can pass body parameter name, lastName, email and password.

### Other routes.
You can use `[controller-name]` like; users, suppliers, orders, orderitems, suppliers, products you can edit at `/src/api/index.ts`.

`/v1/[controller-name]/` GET Method will return all table content.

`/v1/[contoller-name]/add` POST Method will using for add controller to db.

`/v1/[contoller-name]/:id` GET Method will using for retrive for specific id.

`/v1/[contoller-name]/:id` PUT Method will using for update controller in db.

`/v1/[contoller-name]/:id` DELETE Method will using for delete controller in db.


## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.


## License
[MIT](https://choosealicense.com/licenses/mit/)