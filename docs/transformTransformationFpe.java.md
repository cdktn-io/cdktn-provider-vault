# `transformTransformationFpe` Submodule <a name="`transformTransformationFpe` Submodule" id="@cdktn/provider-vault.transformTransformationFpe"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### TransformTransformationFpe <a name="TransformTransformationFpe" id="@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transform_transformation_fpe vault_transform_transformation_fpe}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.Initializer"></a>

```java
import io.cdktn.providers.vault.transform_transformation_fpe.TransformTransformationFpe;

TransformTransformationFpe.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .mount(java.lang.String)
    .name(java.lang.String)
    .template(java.lang.String)
//  .allowedRoles(java.util.List<java.lang.String>)
//  .deletionAllowed(java.lang.Boolean|IResolvable)
//  .maxTweakLen(java.lang.Number)
//  .namespace(java.lang.String)
//  .tweakSource(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.Initializer.parameter.mount">mount</a></code> | <code>java.lang.String</code> | Path where the Transform secrets engine is mounted. Changing this field replaces this resource. |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Name of the transformation. Changing this field replaces this resource. |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.Initializer.parameter.template">template</a></code> | <code>java.lang.String</code> | Name of the template used to match values on encode and decode operations. |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.Initializer.parameter.allowedRoles">allowedRoles</a></code> | <code>java.util.List<java.lang.String></code> | Roles allowed to use this transformation. |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.Initializer.parameter.deletionAllowed">deletionAllowed</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | If `true`, this transformation can be deleted. |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.Initializer.parameter.maxTweakLen">maxTweakLen</a></code> | <code>java.lang.Number</code> | Maximum tweak size, in bytes, allowed for this transformation. |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.Initializer.parameter.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.Initializer.parameter.tweakSource">tweakSource</a></code> | <code>java.lang.String</code> | Source of the tweak value. Valid values are `supplied`, `generated` and `internal`. Vault uses `supplied` if not set. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.Initializer.parameter.mount"></a>

- *Type:* java.lang.String

Path where the Transform secrets engine is mounted. Changing this field replaces this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transform_transformation_fpe#mount TransformTransformationFpe#mount}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Name of the transformation. Changing this field replaces this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transform_transformation_fpe#name TransformTransformationFpe#name}

---

##### `template`<sup>Required</sup> <a name="template" id="@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.Initializer.parameter.template"></a>

- *Type:* java.lang.String

Name of the template used to match values on encode and decode operations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transform_transformation_fpe#template TransformTransformationFpe#template}

---

##### `allowedRoles`<sup>Optional</sup> <a name="allowedRoles" id="@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.Initializer.parameter.allowedRoles"></a>

- *Type:* java.util.List<java.lang.String>

Roles allowed to use this transformation.

A role using this transformation must be in this list for encode and decode operations to work.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transform_transformation_fpe#allowed_roles TransformTransformationFpe#allowed_roles}

---

##### `deletionAllowed`<sup>Optional</sup> <a name="deletionAllowed" id="@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.Initializer.parameter.deletionAllowed"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

If `true`, this transformation can be deleted.

Otherwise deletion is blocked while this value is `false`. Deleting the transformation deletes the underlying key, making FPE-encoded values impossible to decode without restoring from a backup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transform_transformation_fpe#deletion_allowed TransformTransformationFpe#deletion_allowed}

---

##### `maxTweakLen`<sup>Optional</sup> <a name="maxTweakLen" id="@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.Initializer.parameter.maxTweakLen"></a>

- *Type:* java.lang.Number

Maximum tweak size, in bytes, allowed for this transformation.

Valid values are 0 to 32; 0 allows a tweak of any length. Vault does not allow this value to be changed after creation, so changing it fails at apply time. Requires Vault 2.2.0 or later.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transform_transformation_fpe#max_tweak_len TransformTransformationFpe#max_tweak_len}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.Initializer.parameter.namespace"></a>

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transform_transformation_fpe#namespace TransformTransformationFpe#namespace}

---

##### `tweakSource`<sup>Optional</sup> <a name="tweakSource" id="@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.Initializer.parameter.tweakSource"></a>

- *Type:* java.lang.String

Source of the tweak value. Valid values are `supplied`, `generated` and `internal`. Vault uses `supplied` if not set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transform_transformation_fpe#tweak_source TransformTransformationFpe#tweak_source}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.resetAllowedRoles">resetAllowedRoles</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.resetDeletionAllowed">resetDeletionAllowed</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.resetMaxTweakLen">resetMaxTweakLen</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.resetTweakSource">resetTweakSource</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetAllowedRoles` <a name="resetAllowedRoles" id="@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.resetAllowedRoles"></a>

```java
public void resetAllowedRoles()
```

##### `resetDeletionAllowed` <a name="resetDeletionAllowed" id="@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.resetDeletionAllowed"></a>

```java
public void resetDeletionAllowed()
```

##### `resetMaxTweakLen` <a name="resetMaxTweakLen" id="@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.resetMaxTweakLen"></a>

```java
public void resetMaxTweakLen()
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.resetNamespace"></a>

```java
public void resetNamespace()
```

##### `resetTweakSource` <a name="resetTweakSource" id="@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.resetTweakSource"></a>

```java
public void resetTweakSource()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a TransformTransformationFpe resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.isConstruct"></a>

```java
import io.cdktn.providers.vault.transform_transformation_fpe.TransformTransformationFpe;

TransformTransformationFpe.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.isTerraformElement"></a>

```java
import io.cdktn.providers.vault.transform_transformation_fpe.TransformTransformationFpe;

TransformTransformationFpe.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.isTerraformResource"></a>

```java
import io.cdktn.providers.vault.transform_transformation_fpe.TransformTransformationFpe;

TransformTransformationFpe.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.generateConfigForImport"></a>

```java
import io.cdktn.providers.vault.transform_transformation_fpe.TransformTransformationFpe;

TransformTransformationFpe.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),TransformTransformationFpe.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a TransformTransformationFpe resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the TransformTransformationFpe to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing TransformTransformationFpe that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transform_transformation_fpe#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the TransformTransformationFpe to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.property.fpeAlgorithm">fpeAlgorithm</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.property.allowedRolesInput">allowedRolesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.property.deletionAllowedInput">deletionAllowedInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.property.maxTweakLenInput">maxTweakLenInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.property.mountInput">mountInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.property.templateInput">templateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.property.tweakSourceInput">tweakSourceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.property.allowedRoles">allowedRoles</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.property.deletionAllowed">deletionAllowed</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.property.maxTweakLen">maxTweakLen</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.property.mount">mount</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.property.template">template</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.property.tweakSource">tweakSource</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `fpeAlgorithm`<sup>Required</sup> <a name="fpeAlgorithm" id="@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.property.fpeAlgorithm"></a>

```java
public java.lang.String getFpeAlgorithm();
```

- *Type:* java.lang.String

---

##### `allowedRolesInput`<sup>Optional</sup> <a name="allowedRolesInput" id="@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.property.allowedRolesInput"></a>

```java
public java.util.List<java.lang.String> getAllowedRolesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `deletionAllowedInput`<sup>Optional</sup> <a name="deletionAllowedInput" id="@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.property.deletionAllowedInput"></a>

```java
public java.lang.Boolean|IResolvable getDeletionAllowedInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `maxTweakLenInput`<sup>Optional</sup> <a name="maxTweakLenInput" id="@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.property.maxTweakLenInput"></a>

```java
public java.lang.Number getMaxTweakLenInput();
```

- *Type:* java.lang.Number

---

##### `mountInput`<sup>Optional</sup> <a name="mountInput" id="@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.property.mountInput"></a>

```java
public java.lang.String getMountInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `templateInput`<sup>Optional</sup> <a name="templateInput" id="@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.property.templateInput"></a>

```java
public java.lang.String getTemplateInput();
```

- *Type:* java.lang.String

---

##### `tweakSourceInput`<sup>Optional</sup> <a name="tweakSourceInput" id="@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.property.tweakSourceInput"></a>

```java
public java.lang.String getTweakSourceInput();
```

- *Type:* java.lang.String

---

##### `allowedRoles`<sup>Required</sup> <a name="allowedRoles" id="@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.property.allowedRoles"></a>

```java
public java.util.List<java.lang.String> getAllowedRoles();
```

- *Type:* java.util.List<java.lang.String>

---

##### `deletionAllowed`<sup>Required</sup> <a name="deletionAllowed" id="@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.property.deletionAllowed"></a>

```java
public java.lang.Boolean|IResolvable getDeletionAllowed();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `maxTweakLen`<sup>Required</sup> <a name="maxTweakLen" id="@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.property.maxTweakLen"></a>

```java
public java.lang.Number getMaxTweakLen();
```

- *Type:* java.lang.Number

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.property.mount"></a>

```java
public java.lang.String getMount();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `template`<sup>Required</sup> <a name="template" id="@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.property.template"></a>

```java
public java.lang.String getTemplate();
```

- *Type:* java.lang.String

---

##### `tweakSource`<sup>Required</sup> <a name="tweakSource" id="@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.property.tweakSource"></a>

```java
public java.lang.String getTweakSource();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpe.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### TransformTransformationFpeConfig <a name="TransformTransformationFpeConfig" id="@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpeConfig.Initializer"></a>

```java
import io.cdktn.providers.vault.transform_transformation_fpe.TransformTransformationFpeConfig;

TransformTransformationFpeConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .mount(java.lang.String)
    .name(java.lang.String)
    .template(java.lang.String)
//  .allowedRoles(java.util.List<java.lang.String>)
//  .deletionAllowed(java.lang.Boolean|IResolvable)
//  .maxTweakLen(java.lang.Number)
//  .namespace(java.lang.String)
//  .tweakSource(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpeConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpeConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpeConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpeConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpeConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpeConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpeConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpeConfig.property.mount">mount</a></code> | <code>java.lang.String</code> | Path where the Transform secrets engine is mounted. Changing this field replaces this resource. |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpeConfig.property.name">name</a></code> | <code>java.lang.String</code> | Name of the transformation. Changing this field replaces this resource. |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpeConfig.property.template">template</a></code> | <code>java.lang.String</code> | Name of the template used to match values on encode and decode operations. |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpeConfig.property.allowedRoles">allowedRoles</a></code> | <code>java.util.List<java.lang.String></code> | Roles allowed to use this transformation. |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpeConfig.property.deletionAllowed">deletionAllowed</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | If `true`, this transformation can be deleted. |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpeConfig.property.maxTweakLen">maxTweakLen</a></code> | <code>java.lang.Number</code> | Maximum tweak size, in bytes, allowed for this transformation. |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpeConfig.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpeConfig.property.tweakSource">tweakSource</a></code> | <code>java.lang.String</code> | Source of the tweak value. Valid values are `supplied`, `generated` and `internal`. Vault uses `supplied` if not set. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpeConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpeConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpeConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpeConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpeConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpeConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpeConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpeConfig.property.mount"></a>

```java
public java.lang.String getMount();
```

- *Type:* java.lang.String

Path where the Transform secrets engine is mounted. Changing this field replaces this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transform_transformation_fpe#mount TransformTransformationFpe#mount}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpeConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the transformation. Changing this field replaces this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transform_transformation_fpe#name TransformTransformationFpe#name}

---

##### `template`<sup>Required</sup> <a name="template" id="@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpeConfig.property.template"></a>

```java
public java.lang.String getTemplate();
```

- *Type:* java.lang.String

Name of the template used to match values on encode and decode operations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transform_transformation_fpe#template TransformTransformationFpe#template}

---

##### `allowedRoles`<sup>Optional</sup> <a name="allowedRoles" id="@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpeConfig.property.allowedRoles"></a>

```java
public java.util.List<java.lang.String> getAllowedRoles();
```

- *Type:* java.util.List<java.lang.String>

Roles allowed to use this transformation.

A role using this transformation must be in this list for encode and decode operations to work.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transform_transformation_fpe#allowed_roles TransformTransformationFpe#allowed_roles}

---

##### `deletionAllowed`<sup>Optional</sup> <a name="deletionAllowed" id="@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpeConfig.property.deletionAllowed"></a>

```java
public java.lang.Boolean|IResolvable getDeletionAllowed();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

If `true`, this transformation can be deleted.

Otherwise deletion is blocked while this value is `false`. Deleting the transformation deletes the underlying key, making FPE-encoded values impossible to decode without restoring from a backup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transform_transformation_fpe#deletion_allowed TransformTransformationFpe#deletion_allowed}

---

##### `maxTweakLen`<sup>Optional</sup> <a name="maxTweakLen" id="@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpeConfig.property.maxTweakLen"></a>

```java
public java.lang.Number getMaxTweakLen();
```

- *Type:* java.lang.Number

Maximum tweak size, in bytes, allowed for this transformation.

Valid values are 0 to 32; 0 allows a tweak of any length. Vault does not allow this value to be changed after creation, so changing it fails at apply time. Requires Vault 2.2.0 or later.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transform_transformation_fpe#max_tweak_len TransformTransformationFpe#max_tweak_len}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpeConfig.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transform_transformation_fpe#namespace TransformTransformationFpe#namespace}

---

##### `tweakSource`<sup>Optional</sup> <a name="tweakSource" id="@cdktn/provider-vault.transformTransformationFpe.TransformTransformationFpeConfig.property.tweakSource"></a>

```java
public java.lang.String getTweakSource();
```

- *Type:* java.lang.String

Source of the tweak value. Valid values are `supplied`, `generated` and `internal`. Vault uses `supplied` if not set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transform_transformation_fpe#tweak_source TransformTransformationFpe#tweak_source}

---



