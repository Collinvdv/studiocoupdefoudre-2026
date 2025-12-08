<?php

return [
	'toEmail'             => getenv('MAIL_TO'),
	'prependSubject'      => '',
	'prependSender'       => '',
	'allowAttachments'    => false,
	'successFlashMessage' => 'Message sent!'
];