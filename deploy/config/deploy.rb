# config valid only for current version of Capistrano
server 'chronos.wtf', user: 'admin', roles: %w{app}

set :repo_url, 'git@github.com:hoogeveen/apply.git'
set :application, 'inexcelsis'

# Default branch is :master
# ask :branch, `git rev-parse --abbrev-ref HEAD`.chomp

# Default deploy_to directory is /var/www/my_app_name
# set :deploy_to, '/var/www/cms.jobsrepublic.nl'

# Default value for :scm is :git
# set :scm, :git

set :default_env, { 'NODE_ENV' => 'production' }

# Default value for :log_level is :debug
set :log_level, :info

# Default value for linked_dirs is []
#set :linked_dirs, fetch(:linked_dirs, []).push('log', 'tmp/pids', 'tmp/cache', 'tmp/sockets', 'vendor/bundle', 'public/system')

# Default value for keep_releases is 5
set :keep_releases, 2

set :npm_flags, '--silent --no-spin'
# set :gulp_tasks, %w(build)

before 'deploy:updated', :build do
  on roles(:app) do
    within release_path do
      execute :npm, 'run build'
    end
  end
end

# after :deploy, :restart do
#   on roles(:app) do
#     within release_path do
#       execute ['sudo supervisorctl', 'restart', fetch(:application) ].join ' '
#     end
#   end
# end
