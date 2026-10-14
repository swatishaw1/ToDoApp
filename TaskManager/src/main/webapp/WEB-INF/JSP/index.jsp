<%@ page contentType="text/html;charset=UTF-8" %>

<!DOCTYPE html>
<html>
<head>
    <title>Task Manager Test</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            text-align: center;
            margin-top: 100px;
        }

        h1 {
            color: #333;
        }
        .status {
            display: inline-block;
            padding: 12px 25px;
            background: #e8f5e9;
            color: #2e7d32;
            border-radius: 8px;
            font-weight: bold;
        }
    </style>
</head>
<body>
<h1>Task Manager</h1>
<p class="status"> Server is running successfully!</p>
<p> This is a static JSP test page. </p>
<p> Server Time: <%= new java.util.Date() %> </p>
</body>
</html>