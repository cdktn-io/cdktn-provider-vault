# `pkiSecretBackendConfigIssuers` Submodule <a name="`pkiSecretBackendConfigIssuers` Submodule" id="@cdktn/provider-vault.pkiSecretBackendConfigIssuers"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PkiSecretBackendConfigIssuers <a name="PkiSecretBackendConfigIssuers" id="@cdktn/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/pki_secret_backend_config_issuers vault_pki_secret_backend_config_issuers}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.Initializer"></a>

```java
import io.cdktn.providers.vault.pki_secret_backend_config_issuers.PkiSecretBackendConfigIssuers;

PkiSecretBackendConfigIssuers.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .backend(java.lang.String)
//  .default(java.lang.String)
//  .defaultFollowsLatestIssuer(java.lang.Boolean|IResolvable)
//  .id(java.lang.String)
//  .namespace(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.Initializer.parameter.backend">backend</a></code> | <code>java.lang.String</code> | Full path where PKI backend is mounted. |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.Initializer.parameter.default">default</a></code> | <code>java.lang.String</code> | Specifies the default issuer by ID. |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.Initializer.parameter.defaultFollowsLatestIssuer">defaultFollowsLatestIssuer</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Specifies whether a root creation or an issuer import operation updates the default issuer to the newly added issuer. |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/pki_secret_backend_config_issuers#id PkiSecretBackendConfigIssuers#id}. |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.Initializer.parameter.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktn/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.Initializer.parameter.backend"></a>

- *Type:* java.lang.String

Full path where PKI backend is mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/pki_secret_backend_config_issuers#backend PkiSecretBackendConfigIssuers#backend}

---

##### `default`<sup>Optional</sup> <a name="default" id="@cdktn/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.Initializer.parameter.default"></a>

- *Type:* java.lang.String

Specifies the default issuer by ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/pki_secret_backend_config_issuers#default PkiSecretBackendConfigIssuers#default}

---

##### `defaultFollowsLatestIssuer`<sup>Optional</sup> <a name="defaultFollowsLatestIssuer" id="@cdktn/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.Initializer.parameter.defaultFollowsLatestIssuer"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Specifies whether a root creation or an issuer import operation updates the default issuer to the newly added issuer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/pki_secret_backend_config_issuers#default_follows_latest_issuer PkiSecretBackendConfigIssuers#default_follows_latest_issuer}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/pki_secret_backend_config_issuers#id PkiSecretBackendConfigIssuers#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.Initializer.parameter.namespace"></a>

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/pki_secret_backend_config_issuers#namespace PkiSecretBackendConfigIssuers#namespace}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.resetDefault">resetDefault</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.resetDefaultFollowsLatestIssuer">resetDefaultFollowsLatestIssuer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.resetNamespace">resetNamespace</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetDefault` <a name="resetDefault" id="@cdktn/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.resetDefault"></a>

```java
public void resetDefault()
```

##### `resetDefaultFollowsLatestIssuer` <a name="resetDefaultFollowsLatestIssuer" id="@cdktn/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.resetDefaultFollowsLatestIssuer"></a>

```java
public void resetDefaultFollowsLatestIssuer()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.resetId"></a>

```java
public void resetId()
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktn/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.resetNamespace"></a>

```java
public void resetNamespace()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a PkiSecretBackendConfigIssuers resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.isConstruct"></a>

```java
import io.cdktn.providers.vault.pki_secret_backend_config_issuers.PkiSecretBackendConfigIssuers;

PkiSecretBackendConfigIssuers.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.isTerraformElement"></a>

```java
import io.cdktn.providers.vault.pki_secret_backend_config_issuers.PkiSecretBackendConfigIssuers;

PkiSecretBackendConfigIssuers.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.isTerraformResource"></a>

```java
import io.cdktn.providers.vault.pki_secret_backend_config_issuers.PkiSecretBackendConfigIssuers;

PkiSecretBackendConfigIssuers.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.generateConfigForImport"></a>

```java
import io.cdktn.providers.vault.pki_secret_backend_config_issuers.PkiSecretBackendConfigIssuers;

PkiSecretBackendConfigIssuers.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),PkiSecretBackendConfigIssuers.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a PkiSecretBackendConfigIssuers resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the PkiSecretBackendConfigIssuers to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing PkiSecretBackendConfigIssuers that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/pki_secret_backend_config_issuers#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the PkiSecretBackendConfigIssuers to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.property.backendInput">backendInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.property.defaultFollowsLatestIssuerInput">defaultFollowsLatestIssuerInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.property.defaultInput">defaultInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.property.backend">backend</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.property.default">default</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.property.defaultFollowsLatestIssuer">defaultFollowsLatestIssuer</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `backendInput`<sup>Optional</sup> <a name="backendInput" id="@cdktn/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.property.backendInput"></a>

```java
public java.lang.String getBackendInput();
```

- *Type:* java.lang.String

---

##### `defaultFollowsLatestIssuerInput`<sup>Optional</sup> <a name="defaultFollowsLatestIssuerInput" id="@cdktn/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.property.defaultFollowsLatestIssuerInput"></a>

```java
public java.lang.Boolean|IResolvable getDefaultFollowsLatestIssuerInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `defaultInput`<sup>Optional</sup> <a name="defaultInput" id="@cdktn/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.property.defaultInput"></a>

```java
public java.lang.String getDefaultInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktn/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktn/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.property.backend"></a>

```java
public java.lang.String getBackend();
```

- *Type:* java.lang.String

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktn/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.property.default"></a>

```java
public java.lang.String getDefault();
```

- *Type:* java.lang.String

---

##### `defaultFollowsLatestIssuer`<sup>Required</sup> <a name="defaultFollowsLatestIssuer" id="@cdktn/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.property.defaultFollowsLatestIssuer"></a>

```java
public java.lang.Boolean|IResolvable getDefaultFollowsLatestIssuer();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### PkiSecretBackendConfigIssuersConfig <a name="PkiSecretBackendConfigIssuersConfig" id="@cdktn/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuersConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuersConfig.Initializer"></a>

```java
import io.cdktn.providers.vault.pki_secret_backend_config_issuers.PkiSecretBackendConfigIssuersConfig;

PkiSecretBackendConfigIssuersConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .backend(java.lang.String)
//  .default(java.lang.String)
//  .defaultFollowsLatestIssuer(java.lang.Boolean|IResolvable)
//  .id(java.lang.String)
//  .namespace(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuersConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuersConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuersConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuersConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuersConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuersConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuersConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuersConfig.property.backend">backend</a></code> | <code>java.lang.String</code> | Full path where PKI backend is mounted. |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuersConfig.property.default">default</a></code> | <code>java.lang.String</code> | Specifies the default issuer by ID. |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuersConfig.property.defaultFollowsLatestIssuer">defaultFollowsLatestIssuer</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Specifies whether a root creation or an issuer import operation updates the default issuer to the newly added issuer. |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuersConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/pki_secret_backend_config_issuers#id PkiSecretBackendConfigIssuers#id}. |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuersConfig.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuersConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuersConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuersConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuersConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuersConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuersConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuersConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktn/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuersConfig.property.backend"></a>

```java
public java.lang.String getBackend();
```

- *Type:* java.lang.String

Full path where PKI backend is mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/pki_secret_backend_config_issuers#backend PkiSecretBackendConfigIssuers#backend}

---

##### `default`<sup>Optional</sup> <a name="default" id="@cdktn/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuersConfig.property.default"></a>

```java
public java.lang.String getDefault();
```

- *Type:* java.lang.String

Specifies the default issuer by ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/pki_secret_backend_config_issuers#default PkiSecretBackendConfigIssuers#default}

---

##### `defaultFollowsLatestIssuer`<sup>Optional</sup> <a name="defaultFollowsLatestIssuer" id="@cdktn/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuersConfig.property.defaultFollowsLatestIssuer"></a>

```java
public java.lang.Boolean|IResolvable getDefaultFollowsLatestIssuer();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Specifies whether a root creation or an issuer import operation updates the default issuer to the newly added issuer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/pki_secret_backend_config_issuers#default_follows_latest_issuer PkiSecretBackendConfigIssuers#default_follows_latest_issuer}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuersConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/pki_secret_backend_config_issuers#id PkiSecretBackendConfigIssuers#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuersConfig.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/pki_secret_backend_config_issuers#namespace PkiSecretBackendConfigIssuers#namespace}

---



