<?php
namespace Odiseo\Bundle\ConAgraBundle\Form\Type;

use Symfony\Component\Form\FormBuilderInterface;
use FOS\UserBundle\Form\Type\RegistrationFormType as BaseType;

class RegistrationFormType extends BaseType
{
	public function buildForm(FormBuilderInterface $builder, array $options)
	{
		//parent::buildForm($builder, $options);
		// add your custom field$country
		$builder->add('country', 'choice', array(
				'choices'   => array('0' => 'Argentina', '1' => 'Estados Unidos'),  'label' => 'País',
				'required'  => true
		));
		$builder->add('distributor', 'text', array( 'label' => 'Distribuidor', 'required' => true));
		$builder->add('fullName', 'text', array( 'label' => 'Nombre', 'required' => true));
		//email
		
		$builder->add('email', 'email', array( 'label' => 'Email', 'required' => true));
		$builder->add('position' ,'choice', array(
				'choices'   => array('0' => 'Repositor', '1' => 'Gerente',  '2' => 'Jefe de Personal'),  'label' => 'Cargo',
				'required'  => true
		));
		
		$builder->add('plainPassword', 'password', array( 'label' => 'Crear Contraseña', 'required' => true));
		
	}

	public function getName()
	{
		return 'conagra_user_registration';
	}
}