import React from 'react';

const Blog = () => {
    return (
        <div>
            <div className="card w-full bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">What is an access token and refresh token? How do they work and where should we store them on the client-side?</h2>
                    <p>An access token is a credential used to access an API. It is usually a string and is included in the header of HTTP requests to the API. Access tokens are short-lived and must be refreshed periodically.</p>
                    <br />
                    <p>A refresh token is a credential used to obtain a new access token after the current one expires. It is usually a longer-lived token and is used to authenticate the user and obtain a new access token without requiring the user to log in again.</p>
                    <br />
                    <p>Access tokens and refresh tokens are typically stored on the client-side in secure storage such as browser cookies, local storage or session storage. It's important to store them in a secure way to prevent unauthorized access to the tokens.</p>
                </div>
            </div>
            <div className="card w-full bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">What is Compare SQL and NoSQL databases?</h2>
                    <p>SQL databases are relational databases that use Structured Query Language (SQL) to manage and manipulate data. They are great for handling structured data and are known for their strong consistency, ACID compliance, and ability to handle complex queries. Examples of SQL databases include MySQL, PostgreSQL, and Oracle.</p>
                    <br />
                    <p>On the other hand, NoSQL databases are non-relational databases that do not use SQL to manage data. They are great for handling unstructured or semi-structured data and are known for their flexibility, scalability, and ability to handle large amounts of data. Examples of NoSQL databases include MongoDB, Cassandra, and Redis.</p>
                    <br />
                    <p>In summary, SQL databases are great for handling structured data with complex relationships between tables, while NoSQL databases are great for handling unstructured or semi-structured data with high scalability requirements. The choice between the two depends on the specific needs of your application.</p>
                </div>
            </div>
            <div className="card w-full bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">What is an access token and refresh token? How do they work and where should we store them on the client-side?</h2>
                    <p>An access token is a credential used to access an API. It is usually a string and is included in the header of HTTP requests to the API. Access tokens are short-lived and must be refreshed periodically.</p>
                    <br />
                    <p>A refresh token is a credential used to obtain a new access token after the current one expires. It is usually a longer-lived token and is used to authenticate the user and obtain a new access token without requiring the user to log in again.</p>
                    <br />
                    <p>Access tokens and refresh tokens are typically stored on the client-side in secure storage such as browser cookies, local storage or session storage. It's important to store them in a secure way to prevent unauthorized access to the tokens.</p>
                </div>
            </div>
            <div className="card w-full bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">What is an access token and refresh token? How do they work and where should we store them on the client-side?</h2>
                    <p>An access token is a credential used to access an API. It is usually a string and is included in the header of HTTP requests to the API. Access tokens are short-lived and must be refreshed periodically.</p>
                    <br />
                    <p>A refresh token is a credential used to obtain a new access token after the current one expires. It is usually a longer-lived token and is used to authenticate the user and obtain a new access token without requiring the user to log in again.</p>
                    <br />
                    <p>Access tokens and refresh tokens are typically stored on the client-side in secure storage such as browser cookies, local storage or session storage. It's important to store them in a secure way to prevent unauthorized access to the tokens.</p>
                </div>
            </div>
        </div>
    );
};

export default Blog;