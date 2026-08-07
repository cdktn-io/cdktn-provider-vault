# `ephemeralVaultSpiffeSecretBackendMintjwt` Submodule <a name="`ephemeralVaultSpiffeSecretBackendMintjwt` Submodule" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EphemeralVaultSpiffeSecretBackendMintjwt <a name="EphemeralVaultSpiffeSecretBackendMintjwt" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/spiffe_secret_backend_mintjwt vault_spiffe_secret_backend_mintjwt}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.Initializer"></a>

```java
import io.cdktn.providers.vault.ephemeral_vault_spiffe_secret_backend_mintjwt.EphemeralVaultSpiffeSecretBackendMintjwt;

EphemeralVaultSpiffeSecretBackendMintjwt.Builder.create(Construct scope, java.lang.String id)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformEphemeralResourceLifecycle)
//  .provider(TerraformProvider)
    .audience(java.lang.String)
    .mount(java.lang.String)
    .name(java.lang.String)
//  .mountId(java.lang.String)
//  .namespace(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.Initializer.parameter.audience">audience</a></code> | <code>java.lang.String</code> | The audience claim to use. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.Initializer.parameter.mount">mount</a></code> | <code>java.lang.String</code> | Mount path for the SPIFFE secrets engine in Vault. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Name of the SPIFFE role. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.Initializer.parameter.mountId">mountId</a></code> | <code>java.lang.String</code> | Terraform ID of the mount resource. Used to defer the provisioning of the ephemeral resource till the apply stage. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.Initializer.parameter.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformEphemeralResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `audience`<sup>Required</sup> <a name="audience" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.Initializer.parameter.audience"></a>

- *Type:* java.lang.String

The audience claim to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/spiffe_secret_backend_mintjwt#audience EphemeralVaultSpiffeSecretBackendMintjwt#audience}

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.Initializer.parameter.mount"></a>

- *Type:* java.lang.String

Mount path for the SPIFFE secrets engine in Vault.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/spiffe_secret_backend_mintjwt#mount EphemeralVaultSpiffeSecretBackendMintjwt#mount}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Name of the SPIFFE role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/spiffe_secret_backend_mintjwt#name EphemeralVaultSpiffeSecretBackendMintjwt#name}

---

##### `mountId`<sup>Optional</sup> <a name="mountId" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.Initializer.parameter.mountId"></a>

- *Type:* java.lang.String

Terraform ID of the mount resource. Used to defer the provisioning of the ephemeral resource till the apply stage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/spiffe_secret_backend_mintjwt#mount_id EphemeralVaultSpiffeSecretBackendMintjwt#mount_id}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.Initializer.parameter.namespace"></a>

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/spiffe_secret_backend_mintjwt#namespace EphemeralVaultSpiffeSecretBackendMintjwt#namespace}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.toTerraform">toTerraform</a></code> | Adds this ephemeral resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.resetMountId">resetMountId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.resetNamespace">resetNamespace</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this ephemeral resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetMountId` <a name="resetMountId" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.resetMountId"></a>

```java
public void resetMountId()
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.resetNamespace"></a>

```java
public void resetNamespace()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.isTerraformEphemeralResource">isTerraformEphemeralResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.isConstruct"></a>

```java
import io.cdktn.providers.vault.ephemeral_vault_spiffe_secret_backend_mintjwt.EphemeralVaultSpiffeSecretBackendMintjwt;

EphemeralVaultSpiffeSecretBackendMintjwt.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.isTerraformElement"></a>

```java
import io.cdktn.providers.vault.ephemeral_vault_spiffe_secret_backend_mintjwt.EphemeralVaultSpiffeSecretBackendMintjwt;

EphemeralVaultSpiffeSecretBackendMintjwt.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformEphemeralResource` <a name="isTerraformEphemeralResource" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.isTerraformEphemeralResource"></a>

```java
import io.cdktn.providers.vault.ephemeral_vault_spiffe_secret_backend_mintjwt.EphemeralVaultSpiffeSecretBackendMintjwt;

EphemeralVaultSpiffeSecretBackendMintjwt.isTerraformEphemeralResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.isTerraformEphemeralResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.property.token">token</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.property.audienceInput">audienceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.property.mountIdInput">mountIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.property.mountInput">mountInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.property.audience">audience</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.property.mount">mount</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.property.mountId">mountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.property.lifecycle"></a>

```java
public TerraformEphemeralResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformEphemeralResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `token`<sup>Required</sup> <a name="token" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.property.token"></a>

```java
public java.lang.String getToken();
```

- *Type:* java.lang.String

---

##### `audienceInput`<sup>Optional</sup> <a name="audienceInput" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.property.audienceInput"></a>

```java
public java.lang.String getAudienceInput();
```

- *Type:* java.lang.String

---

##### `mountIdInput`<sup>Optional</sup> <a name="mountIdInput" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.property.mountIdInput"></a>

```java
public java.lang.String getMountIdInput();
```

- *Type:* java.lang.String

---

##### `mountInput`<sup>Optional</sup> <a name="mountInput" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.property.mountInput"></a>

```java
public java.lang.String getMountInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `audience`<sup>Required</sup> <a name="audience" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.property.audience"></a>

```java
public java.lang.String getAudience();
```

- *Type:* java.lang.String

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.property.mount"></a>

```java
public java.lang.String getMount();
```

- *Type:* java.lang.String

---

##### `mountId`<sup>Required</sup> <a name="mountId" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.property.mountId"></a>

```java
public java.lang.String getMountId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### EphemeralVaultSpiffeSecretBackendMintjwtConfig <a name="EphemeralVaultSpiffeSecretBackendMintjwtConfig" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwtConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwtConfig.Initializer"></a>

```java
import io.cdktn.providers.vault.ephemeral_vault_spiffe_secret_backend_mintjwt.EphemeralVaultSpiffeSecretBackendMintjwtConfig;

EphemeralVaultSpiffeSecretBackendMintjwtConfig.builder()
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformEphemeralResourceLifecycle)
//  .provider(TerraformProvider)
    .audience(java.lang.String)
    .mount(java.lang.String)
    .name(java.lang.String)
//  .mountId(java.lang.String)
//  .namespace(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwtConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwtConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwtConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwtConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwtConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwtConfig.property.audience">audience</a></code> | <code>java.lang.String</code> | The audience claim to use. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwtConfig.property.mount">mount</a></code> | <code>java.lang.String</code> | Mount path for the SPIFFE secrets engine in Vault. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwtConfig.property.name">name</a></code> | <code>java.lang.String</code> | Name of the SPIFFE role. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwtConfig.property.mountId">mountId</a></code> | <code>java.lang.String</code> | Terraform ID of the mount resource. Used to defer the provisioning of the ephemeral resource till the apply stage. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwtConfig.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwtConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwtConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwtConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwtConfig.property.lifecycle"></a>

```java
public TerraformEphemeralResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformEphemeralResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwtConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `audience`<sup>Required</sup> <a name="audience" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwtConfig.property.audience"></a>

```java
public java.lang.String getAudience();
```

- *Type:* java.lang.String

The audience claim to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/spiffe_secret_backend_mintjwt#audience EphemeralVaultSpiffeSecretBackendMintjwt#audience}

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwtConfig.property.mount"></a>

```java
public java.lang.String getMount();
```

- *Type:* java.lang.String

Mount path for the SPIFFE secrets engine in Vault.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/spiffe_secret_backend_mintjwt#mount EphemeralVaultSpiffeSecretBackendMintjwt#mount}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwtConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the SPIFFE role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/spiffe_secret_backend_mintjwt#name EphemeralVaultSpiffeSecretBackendMintjwt#name}

---

##### `mountId`<sup>Optional</sup> <a name="mountId" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwtConfig.property.mountId"></a>

```java
public java.lang.String getMountId();
```

- *Type:* java.lang.String

Terraform ID of the mount resource. Used to defer the provisioning of the ephemeral resource till the apply stage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/spiffe_secret_backend_mintjwt#mount_id EphemeralVaultSpiffeSecretBackendMintjwt#mount_id}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwtConfig.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/spiffe_secret_backend_mintjwt#namespace EphemeralVaultSpiffeSecretBackendMintjwt#namespace}

---



