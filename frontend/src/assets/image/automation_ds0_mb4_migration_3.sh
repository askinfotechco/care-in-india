#!/bin/sh
set -e

ENVIRONMENT=${ENVIRONMENT:="pvm"}
MYSQL_DNS=${MYSQL_DNS:=$(mysql --defaults-file=/data2/conf/.conf/.vodro.cnf -Nse "select @@hostname")}

ansible -m ini_file -a "path=/etc/my.cnf.d/my.cnf section=mysqld@1 option=character_set_server value=utf8mb4 backup=true" localhost
ansible -m ini_file -a "path=/etc/my.cnf.d/my.cnf section=mysqld@1 option=collation_server value=utf8mb4_bin backup=true" localhost
ansible -m ini_file -a "path=/etc/my.cnf.d/my.cnf section=mysqld@2 option=character_set_server value=utf8mb4 backup=true" localhost
ansible -m ini_file -a "path=/etc/my.cnf.d/my.cnf section=mysqld@2 option=collation_server value=utf8mb4_bin backup=true" localhost
systemctl restart mysqld@1
systemctl restart mysqld@2

cd ~/RHEL5 && git pull && git checkout release/23.3.5_RHEL7 && git pull
# eta 20 minutes to perform migration, replace pvm with ds0 if you're on a local vm. Also make sure rhel5 is updated to 23.3.4+ version
TABLES_TO_SKIP='{"medical_dictionary":[".*"],".*":["veeva_edl_doc_snapshot", "veeva_edl_doc_stat_snapshot", "temp_edl_doc_stat_snapshot", "veeva_edl_item_snapshot"]}' ENVIRONMENT="${ENVIRONMENT}" MYSQL_DNS="${MYSQL_DNS}" bash ~/RHEL5/migrations/utf8mb4/run_utf8mb4_migration_ds0.sh

# bounce vault jvm
systemctl restart vault.1