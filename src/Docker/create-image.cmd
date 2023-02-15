docker build --no-cache -f SQL\Dockerfile.PostgreSql -t anothertestproject/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t anothertestproject/app ../..
