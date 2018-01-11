<?php

	if ($_POST["submit"]) {

	$result='div class="alert alert-success">Form submitted</div>';


	if ($_POST['name']) {

	$error.="<br/>Please enter your name";

	}

	if ($_POST['email']) {

	$error.="<br/>Please enter your name";

	}

	
	if ($_POST['comment']) {

	$error.="<br/>Please enter your name";

	}

	if (filter_var('??????@??.??', FILTER_VALIDATE_EMAIL)) {
  	  echo 'VALID';
	} else {
  	  echo 'NOT VALID';
	}

	if ($error) {

	$result='div class="alert alert-danger"><strong>There were error(s) in your form:</strong>'.$error.'</div>


?>


<!doctype html>
<html>
<head>
	<title>My First Webpage</title>
	
	<meta charset="utf-8" />
	<meta http-equiv="Content-type" content="text/html; charset=utf-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />

<!-- Latest compiled and minified CSS -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" integrity="sha512-dTfge/zgoMYpP7QbHy4gWMEGsbsdZeCXz7irItjcC3sPUFtf0kuFbDz/ixG7ArTxmDjLXDmezHubeNikyKGVyQ==" crossorigin="anonymous">

<!-- Optional theme -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap-theme.min.css" integrity="sha384-aUGj/X2zp5rLCbBxumKTCw2Z50WgIr1vs/PFN4praOTvYXWlVyh2UtNUU0KAUhAX" crossorigin="anonymous">

<style>

	.emailForm {
	border:1px solid grey;
	boder-radius:10px;
	margin-top:20px;

	textarea {
	height:120px;
	}

	form {
	padding-bottom:20px;

	}

</style>


</head>
<body>


	<?php

	/*
	
	$emailTo="test@greenhost.org.uk";
	$subject="I hope this works!";
	$body="I think you're great";
	$headers="From: mmitchell@gmail.com;

	if (mail($emailTo, $subject, $body, $headers)) {
	
	echo "Mail sent successfully!";

	} else {

	echo "Mail not sent!";
	
	}

	*/

	?>

	<div class="container">

	<div class="row">

	<div class="col-md-6 col-md-offset-3 emailForm"

	<h1>My email form</h1>

	<?php echo $result; ?>

	<p class="lead">Please get in touch - I'll get back to you as soon as I can </p>

	<form method="post">
	<div class="form-group">

	<label for="name">Your Name:</label>
	<input type="text" name="name" class="form-control" placeholder="Your Name" />

<div class="form-group">

	<label for="email">Your Email:</label>
	<input type="email" name="name" class="form-control" placeholder="Your Email" />

<div class="form-group">

	<label for="comment">Your Comment:</label>
	<textarea class="form-control" name="comment"></textarea>
	
</div>

	<input type="submit" name="submit" class="btn btn-success btn-lg" value="Submit" />
	</div>
	</div>
	
<!-- Latest compiled and minified JavaScript -->
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js" integrity="sha512-K1qjQ+NcF2TYO/eI3M6v8EiNYZfA95pQumfvcVrTHtwQVDG+aHRqLi/ETn2uB+1JqwYqVG3LIvdm9lj6imS/pQ==" crossorigin="anonymous"></script>

</body>
</html>