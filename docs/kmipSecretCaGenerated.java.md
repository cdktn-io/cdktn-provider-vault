# `kmipSecretCaGenerated` Submodule <a name="`kmipSecretCaGenerated` Submodule" id="@cdktn/provider-vault.kmipSecretCaGenerated"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### KmipSecretCaGenerated <a name="KmipSecretCaGenerated" id="@cdktn/provider-vault.kmipSecretCaGenerated.KmipSecretCaGenerated"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/kmip_secret_ca_generated vault_kmip_secret_ca_generated}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.kmipSecretCaGenerated.KmipSecretCaGenerated.Initializer"></a>

```java
import io.cdktn.providers.vault.kmip_secret_ca_generated.KmipSecretCaGenerated;

KmipSecretCaGenerated.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .keyBits(java.lang.Number)
    .keyType(java.lang.String)
    .name(java.lang.String)
    .path(java.lang.String)
//  .namespace(java.lang.String)
//  .ttl(java.lang.Number)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaGenerated.KmipSecretCaGenerated.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaGenerated.KmipSecretCaGenerated.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaGenerated.KmipSecretCaGenerated.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaGenerated.KmipSecretCaGenerated.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaGenerated.KmipSecretCaGenerated.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaGenerated.KmipSecretCaGenerated.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaGenerated.KmipSecretCaGenerated.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaGenerated.KmipSecretCaGenerated.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaGenerated.KmipSecretCaGenerated.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaGenerated.KmipSecretCaGenerated.Initializer.parameter.keyBits">keyBits</a></code> | <code>java.lang.Number</code> | CA key bits. Valid values depend on key_type: For rsa: 2048, 3072, 4096. For ec: 224, 256, 384, 521. |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaGenerated.KmipSecretCaGenerated.Initializer.parameter.keyType">keyType</a></code> | <code>java.lang.String</code> | CA key type (rsa or ec). |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaGenerated.KmipSecretCaGenerated.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Name to identify the CA. |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaGenerated.KmipSecretCaGenerated.Initializer.parameter.path">path</a></code> | <code>java.lang.String</code> | Path where KMIP backend is mounted. |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaGenerated.KmipSecretCaGenerated.Initializer.parameter.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaGenerated.KmipSecretCaGenerated.Initializer.parameter.ttl">ttl</a></code> | <code>java.lang.Number</code> | CA TTL in seconds. Defaults to 365 days. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.kmipSecretCaGenerated.KmipSecretCaGenerated.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.kmipSecretCaGenerated.KmipSecretCaGenerated.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.kmipSecretCaGenerated.KmipSecretCaGenerated.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.kmipSecretCaGenerated.KmipSecretCaGenerated.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.kmipSecretCaGenerated.KmipSecretCaGenerated.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.kmipSecretCaGenerated.KmipSecretCaGenerated.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.kmipSecretCaGenerated.KmipSecretCaGenerated.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.kmipSecretCaGenerated.KmipSecretCaGenerated.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.kmipSecretCaGenerated.KmipSecretCaGenerated.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `keyBits`<sup>Required</sup> <a name="keyBits" id="@cdktn/provider-vault.kmipSecretCaGenerated.KmipSecretCaGenerated.Initializer.parameter.keyBits"></a>

- *Type:* java.lang.Number

CA key bits. Valid values depend on key_type: For rsa: 2048, 3072, 4096. For ec: 224, 256, 384, 521.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/kmip_secret_ca_generated#key_bits KmipSecretCaGenerated#key_bits}

---

##### `keyType`<sup>Required</sup> <a name="keyType" id="@cdktn/provider-vault.kmipSecretCaGenerated.KmipSecretCaGenerated.Initializer.parameter.keyType"></a>

- *Type:* java.lang.String

CA key type (rsa or ec).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/kmip_secret_ca_generated#key_type KmipSecretCaGenerated#key_type}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-vault.kmipSecretCaGenerated.KmipSecretCaGenerated.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Name to identify the CA.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/kmip_secret_ca_generated#name KmipSecretCaGenerated#name}

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.kmipSecretCaGenerated.KmipSecretCaGenerated.Initializer.parameter.path"></a>

- *Type:* java.lang.String

Path where KMIP backend is mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/kmip_secret_ca_generated#path KmipSecretCaGenerated#path}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.kmipSecretCaGenerated.KmipSecretCaGenerated.Initializer.parameter.namespace"></a>

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/kmip_secret_ca_generated#namespace KmipSecretCaGenerated#namespace}

---

##### `ttl`<sup>Optional</sup> <a name="ttl" id="@cdktn/provider-vault.kmipSecretCaGenerated.KmipSecretCaGenerated.Initializer.parameter.ttl"></a>

- *Type:* java.lang.Number

CA TTL in seconds. Defaults to 365 days.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/kmip_secret_ca_generated#ttl KmipSecretCaGenerated#ttl}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaGenerated.KmipSecretCaGenerated.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaGenerated.KmipSecretCaGenerated.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaGenerated.KmipSecretCaGenerated.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaGenerated.KmipSecretCaGenerated.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaGenerated.KmipSecretCaGenerated.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaGenerated.KmipSecretCaGenerated.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaGenerated.KmipSecretCaGenerated.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaGenerated.KmipSecretCaGenerated.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaGenerated.KmipSecretCaGenerated.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaGenerated.KmipSecretCaGenerated.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaGenerated.KmipSecretCaGenerated.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaGenerated.KmipSecretCaGenerated.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaGenerated.KmipSecretCaGenerated.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaGenerated.KmipSecretCaGenerated.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaGenerated.KmipSecretCaGenerated.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaGenerated.KmipSecretCaGenerated.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaGenerated.KmipSecretCaGenerated.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaGenerated.KmipSecretCaGenerated.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaGenerated.KmipSecretCaGenerated.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaGenerated.KmipSecretCaGenerated.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaGenerated.KmipSecretCaGenerated.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaGenerated.KmipSecretCaGenerated.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaGenerated.KmipSecretCaGenerated.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaGenerated.KmipSecretCaGenerated.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaGenerated.KmipSecretCaGenerated.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaGenerated.KmipSecretCaGenerated.resetTtl">resetTtl</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-vault.kmipSecretCaGenerated.KmipSecretCaGenerated.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-vault.kmipSecretCaGenerated.KmipSecretCaGenerated.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-vault.kmipSecretCaGenerated.KmipSecretCaGenerated.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-vault.kmipSecretCaGenerated.KmipSecretCaGenerated.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.kmipSecretCaGenerated.KmipSecretCaGenerated.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-vault.kmipSecretCaGenerated.KmipSecretCaGenerated.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-vault.kmipSecretCaGenerated.KmipSecretCaGenerated.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-vault.kmipSecretCaGenerated.KmipSecretCaGenerated.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-vault.kmipSecretCaGenerated.KmipSecretCaGenerated.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-vault.kmipSecretCaGenerated.KmipSecretCaGenerated.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-vault.kmipSecretCaGenerated.KmipSecretCaGenerated.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-vault.kmipSecretCaGenerated.KmipSecretCaGenerated.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-vault.kmipSecretCaGenerated.KmipSecretCaGenerated.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-vault.kmipSecretCaGenerated.KmipSecretCaGenerated.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-vault.kmipSecretCaGenerated.KmipSecretCaGenerated.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.kmipSecretCaGenerated.KmipSecretCaGenerated.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-vault.kmipSecretCaGenerated.KmipSecretCaGenerated.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.kmipSecretCaGenerated.KmipSecretCaGenerated.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-vault.kmipSecretCaGenerated.KmipSecretCaGenerated.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.kmipSecretCaGenerated.KmipSecretCaGenerated.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-vault.kmipSecretCaGenerated.KmipSecretCaGenerated.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.kmipSecretCaGenerated.KmipSecretCaGenerated.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-vault.kmipSecretCaGenerated.KmipSecretCaGenerated.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.kmipSecretCaGenerated.KmipSecretCaGenerated.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-vault.kmipSecretCaGenerated.KmipSecretCaGenerated.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.kmipSecretCaGenerated.KmipSecretCaGenerated.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-vault.kmipSecretCaGenerated.KmipSecretCaGenerated.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.kmipSecretCaGenerated.KmipSecretCaGenerated.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-vault.kmipSecretCaGenerated.KmipSecretCaGenerated.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.kmipSecretCaGenerated.KmipSecretCaGenerated.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-vault.kmipSecretCaGenerated.KmipSecretCaGenerated.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.kmipSecretCaGenerated.KmipSecretCaGenerated.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-vault.kmipSecretCaGenerated.KmipSecretCaGenerated.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-vault.kmipSecretCaGenerated.KmipSecretCaGenerated.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.kmipSecretCaGenerated.KmipSecretCaGenerated.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.kmipSecretCaGenerated.KmipSecretCaGenerated.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-vault.kmipSecretCaGenerated.KmipSecretCaGenerated.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.kmipSecretCaGenerated.KmipSecretCaGenerated.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-vault.kmipSecretCaGenerated.KmipSecretCaGenerated.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.kmipSecretCaGenerated.KmipSecretCaGenerated.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-vault.kmipSecretCaGenerated.KmipSecretCaGenerated.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-vault.kmipSecretCaGenerated.KmipSecretCaGenerated.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-vault.kmipSecretCaGenerated.KmipSecretCaGenerated.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-vault.kmipSecretCaGenerated.KmipSecretCaGenerated.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.kmipSecretCaGenerated.KmipSecretCaGenerated.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetNamespace` <a name="resetNamespace" id="@cdktn/provider-vault.kmipSecretCaGenerated.KmipSecretCaGenerated.resetNamespace"></a>

```java
public void resetNamespace()
```

##### `resetTtl` <a name="resetTtl" id="@cdktn/provider-vault.kmipSecretCaGenerated.KmipSecretCaGenerated.resetTtl"></a>

```java
public void resetTtl()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaGenerated.KmipSecretCaGenerated.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaGenerated.KmipSecretCaGenerated.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaGenerated.KmipSecretCaGenerated.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaGenerated.KmipSecretCaGenerated.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a KmipSecretCaGenerated resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-vault.kmipSecretCaGenerated.KmipSecretCaGenerated.isConstruct"></a>

```java
import io.cdktn.providers.vault.kmip_secret_ca_generated.KmipSecretCaGenerated;

KmipSecretCaGenerated.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.kmipSecretCaGenerated.KmipSecretCaGenerated.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-vault.kmipSecretCaGenerated.KmipSecretCaGenerated.isTerraformElement"></a>

```java
import io.cdktn.providers.vault.kmip_secret_ca_generated.KmipSecretCaGenerated;

KmipSecretCaGenerated.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.kmipSecretCaGenerated.KmipSecretCaGenerated.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-vault.kmipSecretCaGenerated.KmipSecretCaGenerated.isTerraformResource"></a>

```java
import io.cdktn.providers.vault.kmip_secret_ca_generated.KmipSecretCaGenerated;

KmipSecretCaGenerated.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.kmipSecretCaGenerated.KmipSecretCaGenerated.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-vault.kmipSecretCaGenerated.KmipSecretCaGenerated.generateConfigForImport"></a>

```java
import io.cdktn.providers.vault.kmip_secret_ca_generated.KmipSecretCaGenerated;

KmipSecretCaGenerated.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),KmipSecretCaGenerated.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a KmipSecretCaGenerated resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.kmipSecretCaGenerated.KmipSecretCaGenerated.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-vault.kmipSecretCaGenerated.KmipSecretCaGenerated.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the KmipSecretCaGenerated to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-vault.kmipSecretCaGenerated.KmipSecretCaGenerated.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing KmipSecretCaGenerated that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/kmip_secret_ca_generated#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.kmipSecretCaGenerated.KmipSecretCaGenerated.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the KmipSecretCaGenerated to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaGenerated.KmipSecretCaGenerated.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaGenerated.KmipSecretCaGenerated.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaGenerated.KmipSecretCaGenerated.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaGenerated.KmipSecretCaGenerated.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaGenerated.KmipSecretCaGenerated.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaGenerated.KmipSecretCaGenerated.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaGenerated.KmipSecretCaGenerated.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaGenerated.KmipSecretCaGenerated.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaGenerated.KmipSecretCaGenerated.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaGenerated.KmipSecretCaGenerated.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaGenerated.KmipSecretCaGenerated.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaGenerated.KmipSecretCaGenerated.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaGenerated.KmipSecretCaGenerated.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaGenerated.KmipSecretCaGenerated.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaGenerated.KmipSecretCaGenerated.property.caPem">caPem</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaGenerated.KmipSecretCaGenerated.property.keyBitsInput">keyBitsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaGenerated.KmipSecretCaGenerated.property.keyTypeInput">keyTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaGenerated.KmipSecretCaGenerated.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaGenerated.KmipSecretCaGenerated.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaGenerated.KmipSecretCaGenerated.property.pathInput">pathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaGenerated.KmipSecretCaGenerated.property.ttlInput">ttlInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaGenerated.KmipSecretCaGenerated.property.keyBits">keyBits</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaGenerated.KmipSecretCaGenerated.property.keyType">keyType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaGenerated.KmipSecretCaGenerated.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaGenerated.KmipSecretCaGenerated.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaGenerated.KmipSecretCaGenerated.property.path">path</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaGenerated.KmipSecretCaGenerated.property.ttl">ttl</a></code> | <code>java.lang.Number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-vault.kmipSecretCaGenerated.KmipSecretCaGenerated.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-vault.kmipSecretCaGenerated.KmipSecretCaGenerated.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-vault.kmipSecretCaGenerated.KmipSecretCaGenerated.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-vault.kmipSecretCaGenerated.KmipSecretCaGenerated.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-vault.kmipSecretCaGenerated.KmipSecretCaGenerated.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-vault.kmipSecretCaGenerated.KmipSecretCaGenerated.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-vault.kmipSecretCaGenerated.KmipSecretCaGenerated.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.kmipSecretCaGenerated.KmipSecretCaGenerated.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.kmipSecretCaGenerated.KmipSecretCaGenerated.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.kmipSecretCaGenerated.KmipSecretCaGenerated.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.kmipSecretCaGenerated.KmipSecretCaGenerated.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.kmipSecretCaGenerated.KmipSecretCaGenerated.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.kmipSecretCaGenerated.KmipSecretCaGenerated.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.kmipSecretCaGenerated.KmipSecretCaGenerated.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `caPem`<sup>Required</sup> <a name="caPem" id="@cdktn/provider-vault.kmipSecretCaGenerated.KmipSecretCaGenerated.property.caPem"></a>

```java
public java.lang.String getCaPem();
```

- *Type:* java.lang.String

---

##### `keyBitsInput`<sup>Optional</sup> <a name="keyBitsInput" id="@cdktn/provider-vault.kmipSecretCaGenerated.KmipSecretCaGenerated.property.keyBitsInput"></a>

```java
public java.lang.Number getKeyBitsInput();
```

- *Type:* java.lang.Number

---

##### `keyTypeInput`<sup>Optional</sup> <a name="keyTypeInput" id="@cdktn/provider-vault.kmipSecretCaGenerated.KmipSecretCaGenerated.property.keyTypeInput"></a>

```java
public java.lang.String getKeyTypeInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-vault.kmipSecretCaGenerated.KmipSecretCaGenerated.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktn/provider-vault.kmipSecretCaGenerated.KmipSecretCaGenerated.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktn/provider-vault.kmipSecretCaGenerated.KmipSecretCaGenerated.property.pathInput"></a>

```java
public java.lang.String getPathInput();
```

- *Type:* java.lang.String

---

##### `ttlInput`<sup>Optional</sup> <a name="ttlInput" id="@cdktn/provider-vault.kmipSecretCaGenerated.KmipSecretCaGenerated.property.ttlInput"></a>

```java
public java.lang.Number getTtlInput();
```

- *Type:* java.lang.Number

---

##### `keyBits`<sup>Required</sup> <a name="keyBits" id="@cdktn/provider-vault.kmipSecretCaGenerated.KmipSecretCaGenerated.property.keyBits"></a>

```java
public java.lang.Number getKeyBits();
```

- *Type:* java.lang.Number

---

##### `keyType`<sup>Required</sup> <a name="keyType" id="@cdktn/provider-vault.kmipSecretCaGenerated.KmipSecretCaGenerated.property.keyType"></a>

```java
public java.lang.String getKeyType();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-vault.kmipSecretCaGenerated.KmipSecretCaGenerated.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-vault.kmipSecretCaGenerated.KmipSecretCaGenerated.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.kmipSecretCaGenerated.KmipSecretCaGenerated.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktn/provider-vault.kmipSecretCaGenerated.KmipSecretCaGenerated.property.ttl"></a>

```java
public java.lang.Number getTtl();
```

- *Type:* java.lang.Number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaGenerated.KmipSecretCaGenerated.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-vault.kmipSecretCaGenerated.KmipSecretCaGenerated.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### KmipSecretCaGeneratedConfig <a name="KmipSecretCaGeneratedConfig" id="@cdktn/provider-vault.kmipSecretCaGenerated.KmipSecretCaGeneratedConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.kmipSecretCaGenerated.KmipSecretCaGeneratedConfig.Initializer"></a>

```java
import io.cdktn.providers.vault.kmip_secret_ca_generated.KmipSecretCaGeneratedConfig;

KmipSecretCaGeneratedConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .keyBits(java.lang.Number)
    .keyType(java.lang.String)
    .name(java.lang.String)
    .path(java.lang.String)
//  .namespace(java.lang.String)
//  .ttl(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaGenerated.KmipSecretCaGeneratedConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaGenerated.KmipSecretCaGeneratedConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaGenerated.KmipSecretCaGeneratedConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaGenerated.KmipSecretCaGeneratedConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaGenerated.KmipSecretCaGeneratedConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaGenerated.KmipSecretCaGeneratedConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaGenerated.KmipSecretCaGeneratedConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaGenerated.KmipSecretCaGeneratedConfig.property.keyBits">keyBits</a></code> | <code>java.lang.Number</code> | CA key bits. Valid values depend on key_type: For rsa: 2048, 3072, 4096. For ec: 224, 256, 384, 521. |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaGenerated.KmipSecretCaGeneratedConfig.property.keyType">keyType</a></code> | <code>java.lang.String</code> | CA key type (rsa or ec). |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaGenerated.KmipSecretCaGeneratedConfig.property.name">name</a></code> | <code>java.lang.String</code> | Name to identify the CA. |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaGenerated.KmipSecretCaGeneratedConfig.property.path">path</a></code> | <code>java.lang.String</code> | Path where KMIP backend is mounted. |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaGenerated.KmipSecretCaGeneratedConfig.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaGenerated.KmipSecretCaGeneratedConfig.property.ttl">ttl</a></code> | <code>java.lang.Number</code> | CA TTL in seconds. Defaults to 365 days. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.kmipSecretCaGenerated.KmipSecretCaGeneratedConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.kmipSecretCaGenerated.KmipSecretCaGeneratedConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.kmipSecretCaGenerated.KmipSecretCaGeneratedConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.kmipSecretCaGenerated.KmipSecretCaGeneratedConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.kmipSecretCaGenerated.KmipSecretCaGeneratedConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.kmipSecretCaGenerated.KmipSecretCaGeneratedConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.kmipSecretCaGenerated.KmipSecretCaGeneratedConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `keyBits`<sup>Required</sup> <a name="keyBits" id="@cdktn/provider-vault.kmipSecretCaGenerated.KmipSecretCaGeneratedConfig.property.keyBits"></a>

```java
public java.lang.Number getKeyBits();
```

- *Type:* java.lang.Number

CA key bits. Valid values depend on key_type: For rsa: 2048, 3072, 4096. For ec: 224, 256, 384, 521.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/kmip_secret_ca_generated#key_bits KmipSecretCaGenerated#key_bits}

---

##### `keyType`<sup>Required</sup> <a name="keyType" id="@cdktn/provider-vault.kmipSecretCaGenerated.KmipSecretCaGeneratedConfig.property.keyType"></a>

```java
public java.lang.String getKeyType();
```

- *Type:* java.lang.String

CA key type (rsa or ec).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/kmip_secret_ca_generated#key_type KmipSecretCaGenerated#key_type}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-vault.kmipSecretCaGenerated.KmipSecretCaGeneratedConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name to identify the CA.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/kmip_secret_ca_generated#name KmipSecretCaGenerated#name}

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.kmipSecretCaGenerated.KmipSecretCaGeneratedConfig.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

Path where KMIP backend is mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/kmip_secret_ca_generated#path KmipSecretCaGenerated#path}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.kmipSecretCaGenerated.KmipSecretCaGeneratedConfig.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/kmip_secret_ca_generated#namespace KmipSecretCaGenerated#namespace}

---

##### `ttl`<sup>Optional</sup> <a name="ttl" id="@cdktn/provider-vault.kmipSecretCaGenerated.KmipSecretCaGeneratedConfig.property.ttl"></a>

```java
public java.lang.Number getTtl();
```

- *Type:* java.lang.Number

CA TTL in seconds. Defaults to 365 days.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/kmip_secret_ca_generated#ttl KmipSecretCaGenerated#ttl}

---



