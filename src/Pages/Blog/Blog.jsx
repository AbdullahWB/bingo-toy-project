import React from 'react';

const Blog = () => {
    return (
        <div className='grid lg:grid-cols-2 mx-5 gap-7 max-w-7xl lg:mx-auto mt-[50px] mb-[100px]'>
            <div className="card w-full bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">What is an access token and refresh token? How do they work and where should we store them on the client-side?</h2>
                    <p>An access token is a credential used to access an API. It is usually a string and is included in the header of HTTP requests to the API. Access tokens are short-lived and must be refreshed periodically.</p>

                    <p>A refresh token is a credential used to obtain a new access token after the current one expires. It is usually a longer-lived token and is used to authenticate the user and obtain a new access token without requiring the user to log in again.</p>

                    <p>Access tokens and refresh tokens are typically stored on the client-side in secure storage such as browser cookies, local storage or session storage. It's important to store them in a secure way to prevent unauthorized access to the tokens.</p>
                </div>
            </div>
            <div className="card w-full bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">What is Compare SQL and NoSQL databases?</h2>
                    <p>SQL databases are relational databases that use Structured Query Language (SQL) to manage and manipulate data. They are great for handling structured data and are known for their strong consistency, ACID compliance, and ability to handle complex queries. Examples of SQL databases include MySQL, PostgreSQL, and Oracle.</p>

                    <p>On the other hand, NoSQL databases are non-relational databases that do not use SQL to manage data. They are great for handling unstructured or semi-structured data and are known for their flexibility, scalability, and ability to handle large amounts of data. Examples of NoSQL databases include MongoDB, Cassandra, and Redis.</p>

                    <p>In summary, SQL databases are great for handling structured data with complex relationships between tables, while NoSQL databases are great for handling unstructured or semi-structured data with high scalability requirements. The choice between the two depends on the specific needs of your application.</p>
                </div>
            </div>
            <div className="card w-full bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">What is express js? What is Nest JS ?</h2>
                    <p>Express.js is a popular web application framework for Node.js. It provides a set of features for building web and mobile applications, including robust routing, middleware support, and easy integration with other Node.js modules. Express.js is known for its simplicity, flexibility, and scalability, making it a great choice for building APIs, web applications, and more.</p>

                    <p>NestJS is a progressive Node.js framework for building efficient, scalable, and enterprise-grade server-side applications. It is built on top of Express.js and provides additional features such as dependency injection, modular architecture, and more. NestJS is known for its ease of use, extensibility, and maintainability, making it a great choice for building complex server-side applications.</p>
                </div>
            </div>
            <div className="card w-full bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">What is MongoDB aggregate and how does it work </h2>
                    <p>MongoDB's aggregation framework is a powerful tool for performing advanced data analysis on your MongoDB collections. It provides a set of operators that allow you to group, filter, and transform data in various ways.</p>

                    <p>The aggregation pipeline is a framework for data aggregation that consists of stages, each of which performs a specific operation on the input documents. The output of each stage is passed as input to the next stage, forming a pipeline. The pipeline can be composed of various stages, including filtering, sorting, grouping, and projecting.</p>

                    <p>Overall, the aggregation framework provides a powerful and flexible way to perform complex data analysis on MongoDB collections.</p>
                </div>
            </div>
        </div>
    );
};

export default Blog;