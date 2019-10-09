import gql from 'graphql-tag';

const getLists = variables => gql`
  query lists($project: String, $phase: String, $branch: String) {
    parameters(project: $project, env: $phase, branch: $branch) {
      ${variables}
    }
  }
`;

export { getLists }