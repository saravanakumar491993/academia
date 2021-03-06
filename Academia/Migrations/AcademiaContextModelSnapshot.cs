﻿// <auto-generated />
using System;
using Academia.Model;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

namespace Academia.Migrations
{
    [DbContext(typeof(AcademiaContext))]
    partial class AcademiaContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.SerialColumn)
                .HasAnnotation("ProductVersion", "2.1.1-rtm-30846")
                .HasAnnotation("Relational:MaxIdentifierLength", 63);

            modelBuilder.Entity("Academia.Model.Course", b =>
                {
                    b.Property<long>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("CourseCode");

                    b.Property<DateTime>("CreatedTime");

                    b.Property<decimal>("Fees");

                    b.Property<string>("Name")
                        .IsRequired();

                    b.Property<DateTime>("UpdatedTime");

                    b.HasKey("Id");

                    b.ToTable("Courses");
                });

            modelBuilder.Entity("Academia.Model.Person", b =>
                {
                    b.Property<long>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<int>("BloodType");

                    b.Property<int>("CountryCode");

                    b.Property<DateTime>("CreatedTime");

                    b.Property<DateTime>("DOB");

                    b.Property<string>("Discriminator")
                        .IsRequired();

                    b.Property<string>("FirstName")
                        .IsRequired()
                        .HasMaxLength(25);

                    b.Property<int>("Gender");

                    b.Property<string>("Initial");

                    b.Property<string>("LastName")
                        .IsRequired()
                        .HasMaxLength(25);

                    b.Property<long?>("LastUpdatedBy");

                    b.Property<int>("MarriageStatus");

                    b.Property<string>("MiddleName")
                        .HasMaxLength(25);

                    b.Property<string>("NickName")
                        .HasMaxLength(25);

                    b.Property<string>("PhotoUrl")
                        .HasMaxLength(512);

                    b.Property<int?>("Prefix");

                    b.Property<long?>("ReferredBy");

                    b.Property<string>("SpouseName")
                        .HasMaxLength(25);

                    b.Property<int>("Status");

                    b.Property<int?>("Suffix");

                    b.Property<DateTime>("UpdatedTime");

                    b.HasKey("Id");

                    b.HasIndex("LastUpdatedBy");

                    b.HasIndex("ReferredBy");

                    b.ToTable("People");

                    b.HasDiscriminator<string>("Discriminator").HasValue("Person");
                });

            modelBuilder.Entity("Academia.Model.PhoneNumber", b =>
                {
                    b.Property<long>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<DateTime>("CreatedTime");

                    b.Property<bool>("IsPrimary");

                    b.Property<long?>("LastUpdatedBy");

                    b.Property<string>("Number")
                        .IsRequired();

                    b.Property<long>("OwnerId");

                    b.Property<DateTime>("UpdatedTime");

                    b.HasKey("Id");

                    b.HasIndex("LastUpdatedBy")
                        .IsUnique();

                    b.HasIndex("OwnerId");

                    b.ToTable("PhoneNumbers");
                });

            modelBuilder.Entity("Academia.Model.StudentCourse", b =>
                {
                    b.Property<long>("StudentId");

                    b.Property<long>("CourseId");

                    b.Property<DateTime>("CreatedTime");

                    b.Property<DateTime>("UpdatedTime");

                    b.HasKey("StudentId", "CourseId");

                    b.HasIndex("CourseId");

                    b.ToTable("StudentCourse");
                });

            modelBuilder.Entity("Academia.Model.Student", b =>
                {
                    b.HasBaseType("Academia.Model.Person");

                    b.Property<DateTime>("DOJ");

                    b.ToTable("People");

                    b.HasDiscriminator().HasValue("Student");
                });

            modelBuilder.Entity("Academia.Model.User", b =>
                {
                    b.HasBaseType("Academia.Model.Person");

                    b.Property<string>("Password");

                    b.Property<string>("UserName")
                        .IsRequired()
                        .HasMaxLength(50);

                    b.HasIndex("UserName")
                        .IsUnique();

                    b.ToTable("People");

                    b.HasDiscriminator().HasValue("User");
                });

            modelBuilder.Entity("Academia.Model.Person", b =>
                {
                    b.HasOne("Academia.Model.Person", "LastUpdatedUser")
                        .WithMany()
                        .HasForeignKey("LastUpdatedBy");

                    b.HasOne("Academia.Model.Person", "ReferredPerson")
                        .WithMany()
                        .HasForeignKey("ReferredBy");
                });

            modelBuilder.Entity("Academia.Model.PhoneNumber", b =>
                {
                    b.HasOne("Academia.Model.Person", "LastUpdatedUser")
                        .WithOne()
                        .HasForeignKey("Academia.Model.PhoneNumber", "LastUpdatedBy")
                        .OnDelete(DeleteBehavior.SetNull);

                    b.HasOne("Academia.Model.Person", "Owner")
                        .WithMany("PhoneNumbers")
                        .HasForeignKey("OwnerId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("Academia.Model.StudentCourse", b =>
                {
                    b.HasOne("Academia.Model.Course", "Course")
                        .WithMany("StudentCourses")
                        .HasForeignKey("CourseId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("Academia.Model.Student", "Student")
                        .WithMany("StudentCourses")
                        .HasForeignKey("StudentId")
                        .OnDelete(DeleteBehavior.Cascade);
                });
#pragma warning restore 612, 618
        }
    }
}
