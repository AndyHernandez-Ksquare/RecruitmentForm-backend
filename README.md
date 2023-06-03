## Disclaimer: Troubleshooting POST Request

If you encounter any issues with the POST request, you can try adding an `id` field to the request body. In some cases, the API or server might require an `id` field for successful processing of the request.

Here's an example of how you can include the `id` field in the request body:

```json
{
  "id": 12345,
  "acc_number": 12912819281,
  "clabe": 1923012930129301200,
  "bank": "BBVA",
  "user_id": 0
}
```

## Postman Collection

To facilitate testing and interaction with the API, a Postman collection is available in the project's root directory. The collection file is named Recruitment form.postman_collection. You can import this collection into Postman, which will provide you with preconfigured API requests and allow you to explore and test the API endpoints easily.
