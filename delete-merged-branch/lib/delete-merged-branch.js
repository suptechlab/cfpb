module.exports = async (context) => {
  const config = await context.config('delete-merged-branch-config.yml', { exclude: [] })
  const headRepoId = context.payload.pull_request.head.repo.id
  const baseRepoId = context.payload.pull_request.base.repo.id

  const owner = context.payload.repository.owner.login
  const repo = context.payload.repository.name
  const branchName = context.payload.pull_request.head.ref
  const ref = `heads/${branchName}`

  if (headRepoId !== baseRepoId) {
    context.log.info(`Closing PR from fork. Keeping ${context.payload.pull_request.head.label}`)
    return
  }

  if (config.exclude.some((rule) => new RegExp(`^${rule.split('*').join('.*')}$`).test(branchName))) {
    context.log.info(`Branch ${branchName} excluded. Keeping ${context.payload.pull_request.head.label}`)
    return
  }

  try {
    await context.github.git.deleteRef({ owner, repo, ref })
    context.log.info(`Successfully deleted ${owner}/${repo}/${ref}`)
  } catch (e) {
    context.log.warn(e, `Failed to delete ${owner}/${repo}/${ref}`)
  }
}
