# `ephemeralVaultApproleAuthBackendRoleSecretId` Submodule <a name="`ephemeralVaultApproleAuthBackendRoleSecretId` Submodule" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EphemeralVaultApproleAuthBackendRoleSecretId <a name="EphemeralVaultApproleAuthBackendRoleSecretId" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/approle_auth_backend_role_secret_id vault_approle_auth_backend_role_secret_id}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.Initializer"></a>

```java
import io.cdktn.providers.vault.ephemeral_vault_approle_auth_backend_role_secret_id.EphemeralVaultApproleAuthBackendRoleSecretId;

EphemeralVaultApproleAuthBackendRoleSecretId.Builder.create(Construct scope, java.lang.String id)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformEphemeralResourceLifecycle)
//  .provider(TerraformProvider)
    .roleName(java.lang.String)
//  .backend(java.lang.String)
//  .cidrList(java.util.List<java.lang.String>)
//  .metadata(java.lang.String)
//  .mountId(java.lang.String)
//  .namespace(java.lang.String)
//  .numUses(java.lang.Number)
//  .ttl(java.lang.Number)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.Initializer.parameter.roleName">roleName</a></code> | <code>java.lang.String</code> | Name of the role. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.Initializer.parameter.backend">backend</a></code> | <code>java.lang.String</code> | Unique name of the auth backend to configure. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.Initializer.parameter.cidrList">cidrList</a></code> | <code>java.util.List<java.lang.String></code> | List of CIDR blocks that can log in using the SecretID. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.Initializer.parameter.metadata">metadata</a></code> | <code>java.lang.String</code> | JSON-encoded secret data. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.Initializer.parameter.mountId">mountId</a></code> | <code>java.lang.String</code> | Terraform ID of the mount resource. Used to defer the provisioning of the ephemeral resource till the apply stage. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.Initializer.parameter.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.Initializer.parameter.numUses">numUses</a></code> | <code>java.lang.Number</code> | The number of uses for the secret-id. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.Initializer.parameter.ttl">ttl</a></code> | <code>java.lang.Number</code> | The TTL duration of the SecretID in seconds. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformEphemeralResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `roleName`<sup>Required</sup> <a name="roleName" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.Initializer.parameter.roleName"></a>

- *Type:* java.lang.String

Name of the role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/approle_auth_backend_role_secret_id#role_name EphemeralVaultApproleAuthBackendRoleSecretId#role_name}

---

##### `backend`<sup>Optional</sup> <a name="backend" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.Initializer.parameter.backend"></a>

- *Type:* java.lang.String

Unique name of the auth backend to configure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/approle_auth_backend_role_secret_id#backend EphemeralVaultApproleAuthBackendRoleSecretId#backend}

---

##### `cidrList`<sup>Optional</sup> <a name="cidrList" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.Initializer.parameter.cidrList"></a>

- *Type:* java.util.List<java.lang.String>

List of CIDR blocks that can log in using the SecretID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/approle_auth_backend_role_secret_id#cidr_list EphemeralVaultApproleAuthBackendRoleSecretId#cidr_list}

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.Initializer.parameter.metadata"></a>

- *Type:* java.lang.String

JSON-encoded secret data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/approle_auth_backend_role_secret_id#metadata EphemeralVaultApproleAuthBackendRoleSecretId#metadata}

---

##### `mountId`<sup>Optional</sup> <a name="mountId" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.Initializer.parameter.mountId"></a>

- *Type:* java.lang.String

Terraform ID of the mount resource. Used to defer the provisioning of the ephemeral resource till the apply stage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/approle_auth_backend_role_secret_id#mount_id EphemeralVaultApproleAuthBackendRoleSecretId#mount_id}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.Initializer.parameter.namespace"></a>

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/approle_auth_backend_role_secret_id#namespace EphemeralVaultApproleAuthBackendRoleSecretId#namespace}

---

##### `numUses`<sup>Optional</sup> <a name="numUses" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.Initializer.parameter.numUses"></a>

- *Type:* java.lang.Number

The number of uses for the secret-id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/approle_auth_backend_role_secret_id#num_uses EphemeralVaultApproleAuthBackendRoleSecretId#num_uses}

---

##### `ttl`<sup>Optional</sup> <a name="ttl" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.Initializer.parameter.ttl"></a>

- *Type:* java.lang.Number

The TTL duration of the SecretID in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/approle_auth_backend_role_secret_id#ttl EphemeralVaultApproleAuthBackendRoleSecretId#ttl}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.toTerraform">toTerraform</a></code> | Adds this ephemeral resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.resetBackend">resetBackend</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.resetCidrList">resetCidrList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.resetMetadata">resetMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.resetMountId">resetMountId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.resetNumUses">resetNumUses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.resetTtl">resetTtl</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this ephemeral resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetBackend` <a name="resetBackend" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.resetBackend"></a>

```java
public void resetBackend()
```

##### `resetCidrList` <a name="resetCidrList" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.resetCidrList"></a>

```java
public void resetCidrList()
```

##### `resetMetadata` <a name="resetMetadata" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.resetMetadata"></a>

```java
public void resetMetadata()
```

##### `resetMountId` <a name="resetMountId" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.resetMountId"></a>

```java
public void resetMountId()
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.resetNamespace"></a>

```java
public void resetNamespace()
```

##### `resetNumUses` <a name="resetNumUses" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.resetNumUses"></a>

```java
public void resetNumUses()
```

##### `resetTtl` <a name="resetTtl" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.resetTtl"></a>

```java
public void resetTtl()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.isTerraformEphemeralResource">isTerraformEphemeralResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.isConstruct"></a>

```java
import io.cdktn.providers.vault.ephemeral_vault_approle_auth_backend_role_secret_id.EphemeralVaultApproleAuthBackendRoleSecretId;

EphemeralVaultApproleAuthBackendRoleSecretId.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.isTerraformElement"></a>

```java
import io.cdktn.providers.vault.ephemeral_vault_approle_auth_backend_role_secret_id.EphemeralVaultApproleAuthBackendRoleSecretId;

EphemeralVaultApproleAuthBackendRoleSecretId.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformEphemeralResource` <a name="isTerraformEphemeralResource" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.isTerraformEphemeralResource"></a>

```java
import io.cdktn.providers.vault.ephemeral_vault_approle_auth_backend_role_secret_id.EphemeralVaultApproleAuthBackendRoleSecretId;

EphemeralVaultApproleAuthBackendRoleSecretId.isTerraformEphemeralResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.isTerraformEphemeralResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.property.accessor">accessor</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.property.secretId">secretId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.property.backendInput">backendInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.property.cidrListInput">cidrListInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.property.metadataInput">metadataInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.property.mountIdInput">mountIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.property.numUsesInput">numUsesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.property.roleNameInput">roleNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.property.ttlInput">ttlInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.property.backend">backend</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.property.cidrList">cidrList</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.property.metadata">metadata</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.property.mountId">mountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.property.numUses">numUses</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.property.roleName">roleName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.property.ttl">ttl</a></code> | <code>java.lang.Number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.property.lifecycle"></a>

```java
public TerraformEphemeralResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformEphemeralResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `accessor`<sup>Required</sup> <a name="accessor" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.property.accessor"></a>

```java
public java.lang.String getAccessor();
```

- *Type:* java.lang.String

---

##### `secretId`<sup>Required</sup> <a name="secretId" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.property.secretId"></a>

```java
public java.lang.String getSecretId();
```

- *Type:* java.lang.String

---

##### `backendInput`<sup>Optional</sup> <a name="backendInput" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.property.backendInput"></a>

```java
public java.lang.String getBackendInput();
```

- *Type:* java.lang.String

---

##### `cidrListInput`<sup>Optional</sup> <a name="cidrListInput" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.property.cidrListInput"></a>

```java
public java.util.List<java.lang.String> getCidrListInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `metadataInput`<sup>Optional</sup> <a name="metadataInput" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.property.metadataInput"></a>

```java
public java.lang.String getMetadataInput();
```

- *Type:* java.lang.String

---

##### `mountIdInput`<sup>Optional</sup> <a name="mountIdInput" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.property.mountIdInput"></a>

```java
public java.lang.String getMountIdInput();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `numUsesInput`<sup>Optional</sup> <a name="numUsesInput" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.property.numUsesInput"></a>

```java
public java.lang.Number getNumUsesInput();
```

- *Type:* java.lang.Number

---

##### `roleNameInput`<sup>Optional</sup> <a name="roleNameInput" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.property.roleNameInput"></a>

```java
public java.lang.String getRoleNameInput();
```

- *Type:* java.lang.String

---

##### `ttlInput`<sup>Optional</sup> <a name="ttlInput" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.property.ttlInput"></a>

```java
public java.lang.Number getTtlInput();
```

- *Type:* java.lang.Number

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.property.backend"></a>

```java
public java.lang.String getBackend();
```

- *Type:* java.lang.String

---

##### `cidrList`<sup>Required</sup> <a name="cidrList" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.property.cidrList"></a>

```java
public java.util.List<java.lang.String> getCidrList();
```

- *Type:* java.util.List<java.lang.String>

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.property.metadata"></a>

```java
public java.lang.String getMetadata();
```

- *Type:* java.lang.String

---

##### `mountId`<sup>Required</sup> <a name="mountId" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.property.mountId"></a>

```java
public java.lang.String getMountId();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `numUses`<sup>Required</sup> <a name="numUses" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.property.numUses"></a>

```java
public java.lang.Number getNumUses();
```

- *Type:* java.lang.Number

---

##### `roleName`<sup>Required</sup> <a name="roleName" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.property.roleName"></a>

```java
public java.lang.String getRoleName();
```

- *Type:* java.lang.String

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.property.ttl"></a>

```java
public java.lang.Number getTtl();
```

- *Type:* java.lang.Number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### EphemeralVaultApproleAuthBackendRoleSecretIdConfig <a name="EphemeralVaultApproleAuthBackendRoleSecretIdConfig" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretIdConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretIdConfig.Initializer"></a>

```java
import io.cdktn.providers.vault.ephemeral_vault_approle_auth_backend_role_secret_id.EphemeralVaultApproleAuthBackendRoleSecretIdConfig;

EphemeralVaultApproleAuthBackendRoleSecretIdConfig.builder()
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformEphemeralResourceLifecycle)
//  .provider(TerraformProvider)
    .roleName(java.lang.String)
//  .backend(java.lang.String)
//  .cidrList(java.util.List<java.lang.String>)
//  .metadata(java.lang.String)
//  .mountId(java.lang.String)
//  .namespace(java.lang.String)
//  .numUses(java.lang.Number)
//  .ttl(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretIdConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretIdConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretIdConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretIdConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretIdConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretIdConfig.property.roleName">roleName</a></code> | <code>java.lang.String</code> | Name of the role. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretIdConfig.property.backend">backend</a></code> | <code>java.lang.String</code> | Unique name of the auth backend to configure. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretIdConfig.property.cidrList">cidrList</a></code> | <code>java.util.List<java.lang.String></code> | List of CIDR blocks that can log in using the SecretID. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretIdConfig.property.metadata">metadata</a></code> | <code>java.lang.String</code> | JSON-encoded secret data. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretIdConfig.property.mountId">mountId</a></code> | <code>java.lang.String</code> | Terraform ID of the mount resource. Used to defer the provisioning of the ephemeral resource till the apply stage. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretIdConfig.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretIdConfig.property.numUses">numUses</a></code> | <code>java.lang.Number</code> | The number of uses for the secret-id. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretIdConfig.property.ttl">ttl</a></code> | <code>java.lang.Number</code> | The TTL duration of the SecretID in seconds. |

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretIdConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretIdConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretIdConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretIdConfig.property.lifecycle"></a>

```java
public TerraformEphemeralResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformEphemeralResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretIdConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `roleName`<sup>Required</sup> <a name="roleName" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretIdConfig.property.roleName"></a>

```java
public java.lang.String getRoleName();
```

- *Type:* java.lang.String

Name of the role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/approle_auth_backend_role_secret_id#role_name EphemeralVaultApproleAuthBackendRoleSecretId#role_name}

---

##### `backend`<sup>Optional</sup> <a name="backend" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretIdConfig.property.backend"></a>

```java
public java.lang.String getBackend();
```

- *Type:* java.lang.String

Unique name of the auth backend to configure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/approle_auth_backend_role_secret_id#backend EphemeralVaultApproleAuthBackendRoleSecretId#backend}

---

##### `cidrList`<sup>Optional</sup> <a name="cidrList" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretIdConfig.property.cidrList"></a>

```java
public java.util.List<java.lang.String> getCidrList();
```

- *Type:* java.util.List<java.lang.String>

List of CIDR blocks that can log in using the SecretID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/approle_auth_backend_role_secret_id#cidr_list EphemeralVaultApproleAuthBackendRoleSecretId#cidr_list}

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretIdConfig.property.metadata"></a>

```java
public java.lang.String getMetadata();
```

- *Type:* java.lang.String

JSON-encoded secret data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/approle_auth_backend_role_secret_id#metadata EphemeralVaultApproleAuthBackendRoleSecretId#metadata}

---

##### `mountId`<sup>Optional</sup> <a name="mountId" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretIdConfig.property.mountId"></a>

```java
public java.lang.String getMountId();
```

- *Type:* java.lang.String

Terraform ID of the mount resource. Used to defer the provisioning of the ephemeral resource till the apply stage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/approle_auth_backend_role_secret_id#mount_id EphemeralVaultApproleAuthBackendRoleSecretId#mount_id}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretIdConfig.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/approle_auth_backend_role_secret_id#namespace EphemeralVaultApproleAuthBackendRoleSecretId#namespace}

---

##### `numUses`<sup>Optional</sup> <a name="numUses" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretIdConfig.property.numUses"></a>

```java
public java.lang.Number getNumUses();
```

- *Type:* java.lang.Number

The number of uses for the secret-id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/approle_auth_backend_role_secret_id#num_uses EphemeralVaultApproleAuthBackendRoleSecretId#num_uses}

---

##### `ttl`<sup>Optional</sup> <a name="ttl" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretIdConfig.property.ttl"></a>

```java
public java.lang.Number getTtl();
```

- *Type:* java.lang.Number

The TTL duration of the SecretID in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/approle_auth_backend_role_secret_id#ttl EphemeralVaultApproleAuthBackendRoleSecretId#ttl}

---



