# OAuth & Local Authentication with Passport.

Passport is an authentication middleware for Node that authenticates requests.

### How it works

passport.session
passport.serialize
passport.deserialize

## Walkthrough

### Frontend

- Start frontend with npx create-react-app --template ./ -> We use ./ to install react for typescript in our current directory(client).

### Backend

- Start backend with npm init -y -> the -y flag fills package.json with initial data.

- Installing dependencies

      dev dependencies		|		dependencies

      - @types/express				- express
      - ts-node						- bcryptjs
      - typescript					- mongoose
      - @types/mongoose				- dotenv

- Creating tsconfig.json so typescript can be parsed into js

        Default config

        {
        "compilerOptions": {
        "esModuleInterop": true,
        "allowSyntheticDefaultImports": true,
        "baseUrl": ".",
        "outDir": "build/dist",
        "module": "commonjs",
        "target": "es5",
        "lib": ["es6", "dom"],
        "sourceMap": true,
        "allowJs": true,
        "skipLibCheck": true,
        "moduleResolution": "node",
        "rootDir": "src",
        "noImplicitAny": true
        }
        }

- Creating initial scripts

      scripts

      > "start": node build/dist/server.js
      	- starts server with bundled version.
      > "build": tsc -p .
      	- builds the compiled (from ts to js) code.
      > "dev": ts-node src/server.ts
      	- starts server with local version.

- Setting up server.ts with initial server
- Connecting MongoDB db to project

      mongoose.connect(uri, configObj, callback);
      - uri: connection uri
      - default config: {
      useNewUrlParser:  true,
      useUnifiedTopology:  true,
      }
      - callback: called after the connection to the database has been established.

- Setting up initial middleware

      // body parser
      app.use(express.json());

      // cors middleware
      app.use(cors({ origin: 'http://localhost:3000', credentials:  true }));

      // creates session
      app.use(
          session({
      	    secret:  'secretcode',
      	    resave:  true,
      	    saveUninitialized:  true,
          })
      );

      app.use(passport.initialize()); // Initializes passport middleware
      app.use(passport.session()); // Authenticates the session
