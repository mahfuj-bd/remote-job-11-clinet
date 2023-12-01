const Blogs = () => {
  return (
    <div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" checked="checked" />
        <div className="collapse-title text-xl font-medium">
          - What is an access token and refresh token? How do they work and
          where should we store them on the client-side?
        </div>
        <div className="collapse-content">
          <p>
            Access tokens and refresh tokens are essential elements of the OAuth
            2.0 authorization protocol. An access token functions as a
            time-limited credential representing a user is permission for a
            client application to access specific resources. Typically
            short-lived, access tokens are included in the Authorization header
            of HTTP requests to secure resource access. On the other hand,
            refresh tokens have a more extended lifespan and serve the purpose
            of obtaining a new access token without user re-authentication when
            the current one expires. The process involves the client requesting
            a new access token from the authorization server using the refresh
            token. When it comes to client-side storage, best practices
            prioritize security. Access tokens, being short-lived, are commonly
            stored in secure memory or platform-specific secure storage
            mechanisms like sessionStorage in browsers or secure storage in
            mobile apps. It is crucial to avoid less secure storage, such as URL
            parameters. However, refresh tokens, being sensitive and long-lived,
            are typically stored on the server side in a secure environment. If
            client-side storage of refresh tokens is unavoidable, it should be
            handled with utmost care. Options include using secure, HttpOnly
            cookies or other secure storage mechanisms. Security considerations
            are paramount in token storage, necessitating encryption and
            adherence to platform-specific best practices to ensure the
            confidentiality and integrity of these tokens, preventing
            unauthorized access and potential security breaches.
          </p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
          - What is express js? What is Nest JS (google it)?
        </div>
        <div className="collapse-content">
          <p>
            Express.js: Express.js is a web application framework for Node.js,
            designed to simplify the process of building robust and scalable web
            applications and APIs. It provides a minimal and flexible set of
            features for web and mobile application development. Express.js is
            known for its simplicity, speed, and unopinionated nature, allowing
            developers to structure their applications as they see fit. It
            provides a range of built-in middleware functions for tasks such as
            parsing incoming requests, handling sessions, and serving static
            files. Many developers appreciate Express.js for its lightweight
            nature and the ability to integrate additional modules and
            middleware to extend its functionality. Nest.js: Nest.js is a
            progressive Node.js framework for building efficient, scalable, and
            maintainable server-side applications. It is built with TypeScript
            and takes advantage of its features, including static typing and
            decorators. Nest.js is heavily influenced by Angular, borrowing
            concepts like modules, decorators, and dependency injection. It is
            designed to provide a structured and organized way to build
            server-side applications, making it suitable for large-scale
            projects. Nest.js supports various server-side rendering (SSR)
            strategies, making it versatile for building both traditional web
            applications and modern, dynamic single-page applications. It also
            integrates well with other libraries and frameworks, offering
            flexibility and extensibility. Nest.js can be used to build RESTful
            APIs, GraphQL APIs, microservices, and more. In summary, Express.js
            is a minimalist and flexible web application framework for Node.js,
            while Nest.js is a more opinionated and feature-rich framework that
            builds on concepts from Angular and brings them to the server side,
            offering a structured and scalable approach to building Node.js
            applications.
          </p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
        - Explain My code.
        </div>
        <div className="collapse-content">
          <h3>Five Special Features on my wbsite</h3>   
          <ul>
            <li>Dynamic website</li>
            <li>Athuntication</li>
            <li> Private Route</li>
            <li>MongoDB Database</li>
            <li>Express Server</li>
            </ul>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
