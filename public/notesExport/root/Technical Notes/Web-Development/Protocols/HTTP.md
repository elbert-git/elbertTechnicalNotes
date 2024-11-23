# HTTP
**HTTP: Hyper Text Transfer Protocol**
--------------------------------------

The backbone protocol of the internet. A standard way of communicating. Using the client server model. Your personal computers are clients and the others are servers. Servers can listen http requests and respond with http responses. 

**Parts of an HTTP request**
----------------------------

|     |     |
| --- | --- |
| Header | **Request line**: the verb and url ()  <br>**additional request headers:** usually parameters about how the request is sent |
| blank line | Just to help separate the parts |
| Body | message contents. Most often used by the http content<br><br>This is a json |

**Status Codes**
----------------

 After pinging a request to server, the server will respond with http response. in the header is a status code indicating the state of the request. Usually indicating something about the status of the request. Below are the some of common status codes. 

Generally the codes are grouped into categories of responses

|     |     |
| --- | --- |
| From 100-199 | information |
| 200-299 | Successful |
| 300-399 | redirection |
| 400-499 | Client error |
| 500-599 | server errors |

Some common response codes are

*   200: OK
*   404: resource not found