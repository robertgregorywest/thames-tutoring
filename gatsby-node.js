const _ = require('lodash');
const Promise = require('bluebird');
const path = require('path');
const slash = require('slash');

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return new Promise((resolve, reject) => {
    const subjectTemplate = path.resolve('./src/templates/subjectTemplate.jsx');

    graphql(`
      {
        allSubjects: allKontentItemSubjectArea {
          nodes {
            elements {
              url {
                value
              }
            }
          }
        }
      }
    `).then((result) => {
      if (result.errors) {
        console.log(result.errors);
        reject(result.errors);
      }

      _.each(result.data.allSubjects.nodes, (node) => {
        createPage({
          path: `/${node.elements.url.value}`,
          component: slash(subjectTemplate),
          context: { url: `${node.elements.url.value}` },
        });
      });

      resolve();
    });
  });
};
