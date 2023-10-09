import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';

interface FolderWithNames {
  folderName: string;
  names: string[];
}

@Component({
  selector: 'skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent {
  // public svgs: FolderWithNames = [
  //   { name: 'javascript-svgrepo-com.svg' },
  //   { name: 'java-svgrepo-com.svg' },
  //   { name: 'laravel-svgrepo-com.svg' },
  //   { name: 'nestjs-svgrepo-com.svg' },
  //   { name: 'nodejs-svgrepo-com.svg' },
  //   { name: 'php-svgrepo-com.svg' },
  //   { name: 'spring-boot-svgrepo-com.svg' },
  //   { name: 'mongodb-svgrepo-com.svg' },
  //   { name: 'mysql-logo-svgrepo-com.svg' },
  //   { name: 'oracle-svgrepo-com.svg' },
  //   { name: 'phpmyadmin-svgrepo-com.svg' },
  //   { name: 'sql-database-generic-svgrepo-com.svg' },
  //   { name: 'angular-svgrepo-com.svg' },
  //   { name: 'bootstrap-fill-svgrepo-com.svg' },
  //   { name: 'css-3-svgrepo-com.svg' },
  //   { name: 'html-5-svgrepo-com.svg' },
  //   { name: 'scss-svgrepo-com.svg' },
  //   { name: 'tailwind-svgrepo-com.svg' },
  //   { name: 'vue-svgrepo-com.svg' },
  // ];

  public svgs: FolderWithNames[] = [
    {
      folderName: 'backend',
      names: [
        'java-svgrepo-com.svg',
        'laravel-svgrepo-com.svg',
        'nestjs-svgrepo-com.svg',
        'nodejs-svgrepo-com.svg',
        'php-svgrepo-com.svg',
        'spring-boot-svgrepo-com.svg',
      ],
    },
    {
      folderName: 'bbdd',
      names: [
        'mongodb-svgrepo-com.svg',
        'mysql-logo-svgrepo-com.svg',
        'oracle-svgrepo-com.svg',
        'phpmyadmin-svgrepo-com.svg',
        'sql-database-generic-svgrepo-com.svg',
      ],
    },
    {
      folderName: 'frontend',
      names: [
        'angular-svgrepo-com.svg',
        'bootstrap-fill-svgrepo-com.svg',
        'css-3-svgrepo-com.svg',
        'html-5-svgrepo-com.svg',
        'scss-svgrepo-com.svg',
        'tailwind-svgrepo-com.svg',
        'vue-svgrepo-com.svg',
      ],
    },
  ];
}
