# Stage 1: Compile and Build angular codebase
# Use official node image as the base image
FROM node:latest as build

# Set the working directory
RUN mkdir -pv /usr/local/app
WORKDIR /usr/local/app
# Add the source code to app
COPY ./ /usr/local/app/

# Install all the dependencies
RUN npm install
npm install --save pdfmake
npm install pdfmake-unicode --save
npm install @types/pdfmake --save-dev
# Generate the build of the application
RUN npm run build --prod

# Stage 2: Serve app with nginx server
# Use official nginx image as the base image
FROM nginx:latest
# Copy the build output to replace the default nginx contents.
COPY --from=build /usr/local/app/dist/PASSApp /usr/share/nginx/html
# Expose port 80
EXPOSE 80