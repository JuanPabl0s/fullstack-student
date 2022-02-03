package com.example.demo.model;

import lombok.*;

@ToString
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode
public class Student {

    private Long id;
    private String name;
    private String email;
    private Gender gender;


}
