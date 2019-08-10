<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="apple-touch-icon" sizes="57x57" href="assets/favicon/apple-icon-57x57.png">
<link rel="apple-touch-icon" sizes="60x60" href="assets/favicon/apple-icon-60x60.png">
<link rel="apple-touch-icon" sizes="72x72" href="assets/favicon/apple-icon-72x72.png">
<link rel="apple-touch-icon" sizes="76x76" href="assets/favicon/apple-icon-76x76.png">
<link rel="apple-touch-icon" sizes="114x114" href="assets/favicon/apple-icon-114x114.png">
<link rel="apple-touch-icon" sizes="120x120" href="assets/favicon/apple-icon-120x120.png">
<link rel="apple-touch-icon" sizes="144x144" href="assets/favicon/apple-icon-144x144.png">
<link rel="apple-touch-icon" sizes="152x152" href="assets/favicon/apple-icon-152x152.png">
<link rel="apple-touch-icon" sizes="180x180" href="assets/favicon/apple-icon-180x180.png">
<link rel="icon" type="image/png" sizes="192x192"  href="assets/favicon/android-icon-192x192.png">
<link rel="icon" type="image/png" sizes="32x32" href="assets/favicon/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="96x96" href="assets/favicon/favicon-96x96.png">
<link rel="icon" type="image/png" sizes="16x16" href="assets/favicon/favicon-16x16.png">
<link rel="manifest" href="assets/favicon/manifest.json">
<meta name="msapplication-TileColor" content="#ffffff">
<meta name="msapplication-TileImage" content="/ms-icon-144x144.png">
<meta name="theme-color" content="#ffffff">
<title> IMCA RAYDEEOH! </title>
<link rel="stylesheet" type="text/css" href="css/squeleton.css">
<script type="text/javascript" src="js/ux.js"></script>
</head>
<body class="body-submission" onload="startTime()">

<header class="header-submission">
<h1 id="general-page-title">submission</h1>
<a id="return-button" href="index.html">⤶</a>
<img id="header-icon" src="assets/vectorized/icons/full/submission_full.svg" alt="submission icon">
  <div id="clock"></div>
</header>

<?php
$firstnameErr = $lastnameErr = $emailErr = $studentidErr = $fieldstudyErr = $artistnameErr = $showtitleErr = $descriptionErr = $bioErr = $categoryErr = $timeErr = "";
$firstname = $lastname = $pronoun = $email = $studentid = $fieldstudy = $artistname = $showtitle = $description = $bio = $link = $category = $time = "";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
  if (empty($_POST["firstname"])) {
    $firstnameErr = "required";
  } else {
    $firstname = test_input($_POST["firstname"]);
  }
  if (empty($_POST["firstname"])) {
    $lastnameErr = "required";
  } else {
    $lastname = test_input($_POST["lastname"]);
  }
  if (empty($_POST["pronoun"])) {
    $pronoun = "";
  } else {
    $pronoun = test_input($_POST["pronoun"]);
  }
  if (empty($_POST["email"])) {
    $emailErr = "required";
  } else {
    $email = test_input($_POST["email"]);
  }
  if (empty($_POST["studentid"])) {
    $studentidErr = "required";
  } else {
    $studentid = test_input($_POST["studentid"]);
  }
  if (empty($_POST["fieldstudy"])) {
    $fieldstudyErr = "required";
  } else {
    $fieldstudy = test_input($_POST["fieldstudy"]);
  }
  if (empty($_POST["artistname"])) {
    $artistnameErr = "required";
  } else {
    $artistname = test_input($_POST["artistname"]);
  }
  if (empty($_POST["showtitle"])) {
    $showtitleErr = "required";
  } else {
    $showtitle = test_input($_POST["showtitle"]);
  }
  if (empty($_POST["description"])) {
    $descriptionErr = "required";
  } else {
    $description = test_input($_POST["description"]);
  }
  if (empty($_POST["bio"])) {
    $bioErr = "required";
  } else {
    $bio = test_input($_POST["bio"]);
  }
  if (empty($_POST["link"])) {
    $link = "";
  } else {
    $link = test_input($_POST["link"]);
  }
  if (empty($_POST["category"])) {
    $categoryErr = "required";
  } else {
    $category = test_input($_POST["category"]);
  }
  if (empty($_POST["time"])) {
    $timeErr = "required";
  } else {
    $time = test_input($_POST["time"]);
  }
}

function test_input($data) {
  $data = trim($data);
  $data = stripslashes($data);
  $data = htmlspecialchars($data);
  return $data;
}
?>

<div id="form">
<form method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>">

<div class="form-section">
    <legend>general information</legend><br>
  <label for="f-name">first name* :</label><br>
  <input id="f-name" type="text" name="firstname">
</div>
  <br>
  <div class="form-section">
  <label for="s-name">last name* :</label><br>
  <input id="s-name" type="text" name="lastname">
</div>
  <br>
<div class="form-section">
  <label for="pronouns">pronouns :</label><br>
  <input id="gnc" type="radio" name="pronoun">they/them<br>
  <input id="female" type="radio" name="pronoun">she/her<br>
  <input id="male" type="radio" name="pronoun">he/him<br>
  <input id="other" type="radio" name="pronoun">other<br>
    <br>
  <label for="o-pronoun">(if "other" selected):</label><br>
  <input id="o-pronoun" type="text" name="pronoun">
</div>
  <br>
<div class="form-section">
  <label for="email">email* :</label><br>
  <input id="email" type="text" name="email">
</div>
  <br>
<div class="form-section">
  <label for="student-id">student ID* :</label><br>
  <input id="student-id" type="text" name="studentid">
</div>
  <br>
<div class="form-section">
  <label for="f-study">field of study* :</label><br>
  <input id="f-study" type="text" name="fieldstudy">
  </div>
  <br>

<div class="form-section">
      <br><legend>show application</legend><br>
    <label for="artist-name"></label>host/artist/collective name* :<br>
  <input id="artist-name" type="text" name="artistname">
</div>
  <br>
<div class="form-section">
  <label for="show-title">show title (can be tentative)* :</label><br>
  <input id="show-title" type="text" name="showtitle">
</div>
  <br>
<div class="form-section">
  <label for="description">project/show description* (50-100 words max):</label><br>
  <textarea name="description"></textarea>
</div>
  <br>
<div class="form-section">
  <label for="bio">short bio* (50 words max) :</label><br>
  <textarea name="bio"></textarea>
</div>
  <br>
<div class="form-section">
  <label for="web-link">link (personal website, mixcloud, facebook, instagram, etc.):</label><br>
  <input id="web-link" type="text" name="link">
</div>
  <br>
<div class="form-section">
  <fieldset class="project-type" name="category">
  <label for="category">project category* :</label><br>
  <input type="radio" name="soundart" value="soundart">sound art<br>
  <input type="radio" name="fieldrecording" value="fieldrecording"> field recording<br>
  <input type="radio" name="music" value="music">music (DIY or self-produced)<br>
  <input type="radio" name="performance" value="performance">performance or live experimentation<br>
  <input type="radio" name="musicconcrete" value="musicconcrete">music concrète<br>
  <input type="radio" name="podcast" value="podcast">podcast or talk show<br>
  <input type="radio" name="other" value="other">other<br>
</fieldset>  <br>
<label for="other-category">(if "other" selected):</label><br>
  <input id="other-category" type="text" name="othercategory">
  </div>
  <br>

  <div class="form-section">
    <label for="time" name="time">timeslots* :
      <br>(choose 3 timeslots for your show to be aired. one will be chosen according to availabilities)</label>
    <br><br>
    <div class="timeslot">
    <label for="day">day :</label>&nbsp&nbsp&nbsp
    <select class="select-menu" name="day">
      <option value="monday">monday</option>
      <option value="tuesday">tuesday</option>
      <option value="wednesday">wednesday</option>
      <option value="thursday">thursday</option>
      <option value="friday">friday</option>
    </select>
    <br><br>
   from :&nbsp&nbsp&nbsp<select name="day">
   <option value="1000AM">10:00 AM</option>
   <option value="1030AM">10:30 AM</option>
   <option value="1100AM">11:00 AM</option>
   <option value="1130AM">11:30 AM</option>
   <option value="1200PM">12:00 PM</option>
   <option value="1230PM">12:30 PM</option>
   <option value="1300PM">01:00 PM</option>
   <option value="1330PM">01:30 PM</option>
   <option value="1400PM">02:00 PM</option>
   <option value="1430PM">02:30 PM</option>
   <option value="1500PM">03:00 PM</option>
   <option value="1530PM">03:30 PM</option>
   <option value="1600PM">04:00 PM</option>
   <option value="1630PM">04:30 PM</option>
   <option value="1700PM">05:00 PM</option>
   <option value="1730PM">05:30 PM</option>
   </select>&nbsp&nbsp&nbsp&nbsp&nbsp
   to : &nbsp&nbsp&nbsp<select name="day">
     <option value="1030AM">10:30 AM</option>
     <option value="1100AM">11:00 AM</option>
     <option value="1130AM">11:30 AM</option>
     <option value="1200PM">12:00 PM</option>
     <option value="1230PM">12:30 PM</option>
     <option value="1300PM">01:00 PM</option>
     <option value="1330PM">01:30 PM</option>
     <option value="1400PM">02:00 PM</option>
     <option value="1430PM">02:30 PM</option>
     <option value="1500PM">03:00 PM</option>
     <option value="1530PM">03:30 PM</option>
     <option value="1600PM">04:00 PM</option>
     <option value="1630PM">04:30 PM</option>
     <option value="1700PM">05:00 PM</option>
     <option value="1730PM">05:30 PM</option>
     <option value="1800PM">06:00 PM</option>
   </select></div>
   <br>
   <div class="timeslot-span">or</div>
  <br>
  <div class="timeslot">
   day : &nbsp&nbsp&nbsp
    <select name="day">
      <option value="monday">monday</option>
      <option value="tuesday">tuesday</option>
      <option value="wednesday">wednesday</option>
      <option value="thursday">thursday</option>
      <option value="friday">friday</option>
    </select>
    <br><br>
    from :&nbsp&nbsp&nbsp<select name="day">
    <option value="1000AM">10:00 AM</option>
    <option value="1030AM">10:30 AM</option>
    <option value="1100AM">11:00 AM</option>
    <option value="1130AM">11:30 AM</option>
    <option value="1200PM">12:00 PM</option>
    <option value="1230PM">12:30 PM</option>
    <option value="1300PM">01:00 PM</option>
    <option value="1330PM">01:30 PM</option>
    <option value="1400PM">02:00 PM</option>
    <option value="1430PM">02:30 PM</option>
    <option value="1500PM">03:00 PM</option>
    <option value="1530PM">03:30 PM</option>
    <option value="1600PM">04:00 PM</option>
    <option value="1630PM">04:30 PM</option>
    <option value="1700PM">05:00 PM</option>
    <option value="1730PM">05:30 PM</option>
    </select>&nbsp&nbsp&nbsp&nbsp&nbsp
    to :&nbsp&nbsp&nbsp<select name="day">
      <option value="1030AM">10:30 AM</option>
      <option value="1100AM">11:00 AM</option>
      <option value="1130AM">11:30 AM</option>
      <option value="1200PM">12:00 PM</option>
      <option value="1230PM">12:30 PM</option>
      <option value="1300PM">01:00 PM</option>
      <option value="1330PM">01:30 PM</option>
      <option value="1400PM">02:00 PM</option>
      <option value="1430PM">02:30 PM</option>
      <option value="1500PM">03:00 PM</option>
      <option value="1530PM">03:30 PM</option>
      <option value="1600PM">04:00 PM</option>
      <option value="1630PM">04:30 PM</option>
      <option value="1700PM">05:00 PM</option>
      <option value="1730PM">05:30 PM</option>
      <option value="1800PM">06:00 PM</option>
   </select></div>
   <br>
   <div class="timeslot-span">or</div>
   <br>
   <div class="timeslot">
   day : &nbsp&nbsp&nbsp
    <select name="day">
      <option value="monday">monday</option>
      <option value="tuesday">tuesday</option>
      <option value="wednesday">wednesday</option>
      <option value="thursday">thursday</option>
      <option value="friday">friday</option>
    </select>
    <br><br>
    from :&nbsp&nbsp&nbsp<select name="day">
    <option value="1000AM">10:00 AM</option>
    <option value="1030AM">10:30 AM</option>
    <option value="1100AM">11:00 AM</option>
    <option value="1130AM">11:30 AM</option>
    <option value="1200PM">12:00 PM</option>
    <option value="1230PM">12:30 PM</option>
    <option value="1300PM">01:00 PM</option>
    <option value="1330PM">01:30 PM</option>
    <option value="1400PM">02:00 PM</option>
    <option value="1430PM">02:30 PM</option>
    <option value="1500PM">03:00 PM</option>
    <option value="1530PM">03:30 PM</option>
    <option value="1600PM">04:00 PM</option>
    <option value="1630PM">04:30 PM</option>
    <option value="1700PM">05:00 PM</option>
    <option value="1730PM">05:30 PM</option>
    </select>&nbsp&nbsp&nbsp&nbsp&nbsp
    <label for="to"></label>
    to :&nbsp&nbsp&nbsp<select name="day">
      <option value="1030AM">10:30 AM</option>
      <option value="1100AM">11:00 AM</option>
      <option value="1130AM">11:30 AM</option>
      <option value="1200PM">12:00 PM</option>
      <option value="1230PM">12:30 PM</option>
      <option value="1300PM">01:00 PM</option>
      <option value="1330PM">01:30 PM</option>
      <option value="1400PM">02:00 PM</option>
      <option value="1430PM">02:30 PM</option>
      <option value="1500PM">03:00 PM</option>
      <option value="1530PM">03:30 PM</option>
      <option value="1600PM">04:00 PM</option>
      <option value="1630PM">04:30 PM</option>
      <option value="1700PM">05:00 PM</option>
      <option value="1730PM">05:30 PM</option>
      <option value="1800PM">06:00 PM</option>
   </select></div>
     </div>
   <br>
   <br>
   <br>
   <div class="form-section">
     <input id="confirm" type="checkbox" name="confirmed" value="confirmed">I have read and respect the submission rules stated in <a href="">this document</a>
  </div></div>
  <br>
  <input type="submit" value="submit" id="submission-button" onclick="alert('Thank you for your submission :-)')">
</form>
