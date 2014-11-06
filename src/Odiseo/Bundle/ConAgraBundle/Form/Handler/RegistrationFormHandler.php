<?php
namespace Odiseo\Bundle\ConAgraBundle\Form\Handler;

use FOS\UserBundle\Form\Handler\RegistrationFormHandler as BaseHandler;

class RegistrationFormHandler extends BaseHandler
{
	
	
	public function process($confirmation = false)
	{
		$user = $this->userManager->createUser();
		$this->form->setData($user);
		
		if ('POST' == $this->request->getMethod()) {
			$this->form->bind($this->request);
			
			if ($this->form->isValid()) {
				$user->setUserName($user->getEmail());
				$this->onSuccess($user, $confirmation);
				return true;
			}
		}
		return false;
	}
	
	private function validateForm(){
		
		
		
	}
}