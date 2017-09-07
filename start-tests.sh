# Start selenium server and trash the verbose error messages from webdriver
nohup webdriver-manager start 2> /dev/null &
# Wait 3 seconds for port 4444 to be listening connections
while ! nc -z 127.0.0.1 4444; do sleep 3; done

#  run protractor
protractor protractor.conf.js
# get result of tests
result=$?

# get Pid of webdrivr-manager instance
selenium_pid=$(ps aux | grep selenium | grep -v grep | awk '{print $2}')
#kill webdriver-manager
kill -9 $selenium_pid

# return with result of tests
exit $result