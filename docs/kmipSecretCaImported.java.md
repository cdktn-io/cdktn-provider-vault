# `kmipSecretCaImported` Submodule <a name="`kmipSecretCaImported` Submodule" id="@cdktn/provider-vault.kmipSecretCaImported"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### KmipSecretCaImported <a name="KmipSecretCaImported" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/kmip_secret_ca_imported vault_kmip_secret_ca_imported}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.Initializer"></a>

```java
import io.cdktn.providers.vault.kmip_secret_ca_imported.KmipSecretCaImported;

KmipSecretCaImported.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .caPem(java.lang.String)
    .name(java.lang.String)
    .path(java.lang.String)
//  .namespace(java.lang.String)
//  .roleField(java.lang.String)
//  .roleName(java.lang.String)
//  .scopeField(java.lang.String)
//  .scopeName(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.Initializer.parameter.caPem">caPem</a></code> | <code>java.lang.String</code> | CA certificate in PEM format. |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Name to identify the CA. |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.Initializer.parameter.path">path</a></code> | <code>java.lang.String</code> | Path where KMIP backend is mounted. |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.Initializer.parameter.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.Initializer.parameter.roleField">roleField</a></code> | <code>java.lang.String</code> | The field in the certificate to use for the role (CN, O, OU, or UID). |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.Initializer.parameter.roleName">roleName</a></code> | <code>java.lang.String</code> | The role name to associate with this CA. Must specify exactly one of role_name or role_field. |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.Initializer.parameter.scopeField">scopeField</a></code> | <code>java.lang.String</code> | The field in the certificate to use for the scope (CN, O, OU, or UID). |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.Initializer.parameter.scopeName">scopeName</a></code> | <code>java.lang.String</code> | The scope name to associate with this CA. Must specify exactly one of scope_name or scope_field. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `caPem`<sup>Required</sup> <a name="caPem" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.Initializer.parameter.caPem"></a>

- *Type:* java.lang.String

CA certificate in PEM format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/kmip_secret_ca_imported#ca_pem KmipSecretCaImported#ca_pem}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Name to identify the CA.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/kmip_secret_ca_imported#name KmipSecretCaImported#name}

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.Initializer.parameter.path"></a>

- *Type:* java.lang.String

Path where KMIP backend is mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/kmip_secret_ca_imported#path KmipSecretCaImported#path}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.Initializer.parameter.namespace"></a>

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/kmip_secret_ca_imported#namespace KmipSecretCaImported#namespace}

---

##### `roleField`<sup>Optional</sup> <a name="roleField" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.Initializer.parameter.roleField"></a>

- *Type:* java.lang.String

The field in the certificate to use for the role (CN, O, OU, or UID).

Must specify exactly one of role_name or role_field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/kmip_secret_ca_imported#role_field KmipSecretCaImported#role_field}

---

##### `roleName`<sup>Optional</sup> <a name="roleName" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.Initializer.parameter.roleName"></a>

- *Type:* java.lang.String

The role name to associate with this CA. Must specify exactly one of role_name or role_field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/kmip_secret_ca_imported#role_name KmipSecretCaImported#role_name}

---

##### `scopeField`<sup>Optional</sup> <a name="scopeField" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.Initializer.parameter.scopeField"></a>

- *Type:* java.lang.String

The field in the certificate to use for the scope (CN, O, OU, or UID).

Must specify exactly one of scope_name or scope_field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/kmip_secret_ca_imported#scope_field KmipSecretCaImported#scope_field}

---

##### `scopeName`<sup>Optional</sup> <a name="scopeName" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.Initializer.parameter.scopeName"></a>

- *Type:* java.lang.String

The scope name to associate with this CA. Must specify exactly one of scope_name or scope_field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/kmip_secret_ca_imported#scope_name KmipSecretCaImported#scope_name}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.resetRoleField">resetRoleField</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.resetRoleName">resetRoleName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.resetScopeField">resetScopeField</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.resetScopeName">resetScopeName</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetNamespace` <a name="resetNamespace" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.resetNamespace"></a>

```java
public void resetNamespace()
```

##### `resetRoleField` <a name="resetRoleField" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.resetRoleField"></a>

```java
public void resetRoleField()
```

##### `resetRoleName` <a name="resetRoleName" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.resetRoleName"></a>

```java
public void resetRoleName()
```

##### `resetScopeField` <a name="resetScopeField" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.resetScopeField"></a>

```java
public void resetScopeField()
```

##### `resetScopeName` <a name="resetScopeName" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.resetScopeName"></a>

```java
public void resetScopeName()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a KmipSecretCaImported resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.isConstruct"></a>

```java
import io.cdktn.providers.vault.kmip_secret_ca_imported.KmipSecretCaImported;

KmipSecretCaImported.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.isTerraformElement"></a>

```java
import io.cdktn.providers.vault.kmip_secret_ca_imported.KmipSecretCaImported;

KmipSecretCaImported.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.isTerraformResource"></a>

```java
import io.cdktn.providers.vault.kmip_secret_ca_imported.KmipSecretCaImported;

KmipSecretCaImported.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.generateConfigForImport"></a>

```java
import io.cdktn.providers.vault.kmip_secret_ca_imported.KmipSecretCaImported;

KmipSecretCaImported.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),KmipSecretCaImported.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a KmipSecretCaImported resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the KmipSecretCaImported to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing KmipSecretCaImported that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/kmip_secret_ca_imported#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the KmipSecretCaImported to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.property.caPemInput">caPemInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.property.pathInput">pathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.property.roleFieldInput">roleFieldInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.property.roleNameInput">roleNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.property.scopeFieldInput">scopeFieldInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.property.scopeNameInput">scopeNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.property.caPem">caPem</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.property.path">path</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.property.roleField">roleField</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.property.roleName">roleName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.property.scopeField">scopeField</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.property.scopeName">scopeName</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `caPemInput`<sup>Optional</sup> <a name="caPemInput" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.property.caPemInput"></a>

```java
public java.lang.String getCaPemInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.property.pathInput"></a>

```java
public java.lang.String getPathInput();
```

- *Type:* java.lang.String

---

##### `roleFieldInput`<sup>Optional</sup> <a name="roleFieldInput" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.property.roleFieldInput"></a>

```java
public java.lang.String getRoleFieldInput();
```

- *Type:* java.lang.String

---

##### `roleNameInput`<sup>Optional</sup> <a name="roleNameInput" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.property.roleNameInput"></a>

```java
public java.lang.String getRoleNameInput();
```

- *Type:* java.lang.String

---

##### `scopeFieldInput`<sup>Optional</sup> <a name="scopeFieldInput" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.property.scopeFieldInput"></a>

```java
public java.lang.String getScopeFieldInput();
```

- *Type:* java.lang.String

---

##### `scopeNameInput`<sup>Optional</sup> <a name="scopeNameInput" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.property.scopeNameInput"></a>

```java
public java.lang.String getScopeNameInput();
```

- *Type:* java.lang.String

---

##### `caPem`<sup>Required</sup> <a name="caPem" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.property.caPem"></a>

```java
public java.lang.String getCaPem();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

---

##### `roleField`<sup>Required</sup> <a name="roleField" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.property.roleField"></a>

```java
public java.lang.String getRoleField();
```

- *Type:* java.lang.String

---

##### `roleName`<sup>Required</sup> <a name="roleName" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.property.roleName"></a>

```java
public java.lang.String getRoleName();
```

- *Type:* java.lang.String

---

##### `scopeField`<sup>Required</sup> <a name="scopeField" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.property.scopeField"></a>

```java
public java.lang.String getScopeField();
```

- *Type:* java.lang.String

---

##### `scopeName`<sup>Required</sup> <a name="scopeName" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.property.scopeName"></a>

```java
public java.lang.String getScopeName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### KmipSecretCaImportedConfig <a name="KmipSecretCaImportedConfig" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImportedConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImportedConfig.Initializer"></a>

```java
import io.cdktn.providers.vault.kmip_secret_ca_imported.KmipSecretCaImportedConfig;

KmipSecretCaImportedConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .caPem(java.lang.String)
    .name(java.lang.String)
    .path(java.lang.String)
//  .namespace(java.lang.String)
//  .roleField(java.lang.String)
//  .roleName(java.lang.String)
//  .scopeField(java.lang.String)
//  .scopeName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImportedConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImportedConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImportedConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImportedConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImportedConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImportedConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImportedConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImportedConfig.property.caPem">caPem</a></code> | <code>java.lang.String</code> | CA certificate in PEM format. |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImportedConfig.property.name">name</a></code> | <code>java.lang.String</code> | Name to identify the CA. |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImportedConfig.property.path">path</a></code> | <code>java.lang.String</code> | Path where KMIP backend is mounted. |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImportedConfig.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImportedConfig.property.roleField">roleField</a></code> | <code>java.lang.String</code> | The field in the certificate to use for the role (CN, O, OU, or UID). |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImportedConfig.property.roleName">roleName</a></code> | <code>java.lang.String</code> | The role name to associate with this CA. Must specify exactly one of role_name or role_field. |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImportedConfig.property.scopeField">scopeField</a></code> | <code>java.lang.String</code> | The field in the certificate to use for the scope (CN, O, OU, or UID). |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImportedConfig.property.scopeName">scopeName</a></code> | <code>java.lang.String</code> | The scope name to associate with this CA. Must specify exactly one of scope_name or scope_field. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImportedConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImportedConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImportedConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImportedConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImportedConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImportedConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImportedConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `caPem`<sup>Required</sup> <a name="caPem" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImportedConfig.property.caPem"></a>

```java
public java.lang.String getCaPem();
```

- *Type:* java.lang.String

CA certificate in PEM format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/kmip_secret_ca_imported#ca_pem KmipSecretCaImported#ca_pem}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImportedConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name to identify the CA.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/kmip_secret_ca_imported#name KmipSecretCaImported#name}

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImportedConfig.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

Path where KMIP backend is mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/kmip_secret_ca_imported#path KmipSecretCaImported#path}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImportedConfig.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/kmip_secret_ca_imported#namespace KmipSecretCaImported#namespace}

---

##### `roleField`<sup>Optional</sup> <a name="roleField" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImportedConfig.property.roleField"></a>

```java
public java.lang.String getRoleField();
```

- *Type:* java.lang.String

The field in the certificate to use for the role (CN, O, OU, or UID).

Must specify exactly one of role_name or role_field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/kmip_secret_ca_imported#role_field KmipSecretCaImported#role_field}

---

##### `roleName`<sup>Optional</sup> <a name="roleName" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImportedConfig.property.roleName"></a>

```java
public java.lang.String getRoleName();
```

- *Type:* java.lang.String

The role name to associate with this CA. Must specify exactly one of role_name or role_field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/kmip_secret_ca_imported#role_name KmipSecretCaImported#role_name}

---

##### `scopeField`<sup>Optional</sup> <a name="scopeField" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImportedConfig.property.scopeField"></a>

```java
public java.lang.String getScopeField();
```

- *Type:* java.lang.String

The field in the certificate to use for the scope (CN, O, OU, or UID).

Must specify exactly one of scope_name or scope_field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/kmip_secret_ca_imported#scope_field KmipSecretCaImported#scope_field}

---

##### `scopeName`<sup>Optional</sup> <a name="scopeName" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImportedConfig.property.scopeName"></a>

```java
public java.lang.String getScopeName();
```

- *Type:* java.lang.String

The scope name to associate with this CA. Must specify exactly one of scope_name or scope_field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/kmip_secret_ca_imported#scope_name KmipSecretCaImported#scope_name}

---



