# `radiusAuthBackendUser` Submodule <a name="`radiusAuthBackendUser` Submodule" id="@cdktn/provider-vault.radiusAuthBackendUser"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RadiusAuthBackendUser <a name="RadiusAuthBackendUser" id="@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUser"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/radius_auth_backend_user vault_radius_auth_backend_user}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUser.Initializer"></a>

```java
import io.cdktn.providers.vault.radius_auth_backend_user.RadiusAuthBackendUser;

RadiusAuthBackendUser.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .mount(java.lang.String)
    .username(java.lang.String)
//  .namespace(java.lang.String)
//  .policies(java.util.List<java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUser.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUser.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUser.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUser.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUser.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUser.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUser.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUser.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUser.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUser.Initializer.parameter.mount">mount</a></code> | <code>java.lang.String</code> | Path to the RADIUS auth mount where the user will be registered. |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUser.Initializer.parameter.username">username</a></code> | <code>java.lang.String</code> | The username to register with the RADIUS auth backend. |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUser.Initializer.parameter.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUser.Initializer.parameter.policies">policies</a></code> | <code>java.util.List<java.lang.String></code> | A set of Vault policies to associate with this user. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUser.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUser.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUser.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUser.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUser.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUser.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUser.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUser.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUser.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUser.Initializer.parameter.mount"></a>

- *Type:* java.lang.String

Path to the RADIUS auth mount where the user will be registered.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/radius_auth_backend_user#mount RadiusAuthBackendUser#mount}

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUser.Initializer.parameter.username"></a>

- *Type:* java.lang.String

The username to register with the RADIUS auth backend.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/radius_auth_backend_user#username RadiusAuthBackendUser#username}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUser.Initializer.parameter.namespace"></a>

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/radius_auth_backend_user#namespace RadiusAuthBackendUser#namespace}

---

##### `policies`<sup>Optional</sup> <a name="policies" id="@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUser.Initializer.parameter.policies"></a>

- *Type:* java.util.List<java.lang.String>

A set of Vault policies to associate with this user.

If not set, only the `default` policy will be applicable to the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/radius_auth_backend_user#policies RadiusAuthBackendUser#policies}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUser.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUser.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUser.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUser.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUser.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUser.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUser.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUser.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUser.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUser.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUser.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUser.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUser.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUser.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUser.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUser.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUser.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUser.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUser.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUser.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUser.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUser.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUser.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUser.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUser.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUser.resetPolicies">resetPolicies</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUser.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUser.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUser.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUser.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUser.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUser.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUser.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUser.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUser.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUser.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUser.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUser.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUser.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUser.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUser.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUser.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUser.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUser.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUser.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUser.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUser.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUser.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUser.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUser.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUser.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUser.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUser.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUser.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUser.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUser.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUser.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUser.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUser.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUser.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUser.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUser.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUser.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUser.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUser.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUser.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUser.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUser.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUser.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUser.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUser.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetNamespace` <a name="resetNamespace" id="@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUser.resetNamespace"></a>

```java
public void resetNamespace()
```

##### `resetPolicies` <a name="resetPolicies" id="@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUser.resetPolicies"></a>

```java
public void resetPolicies()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUser.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUser.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUser.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUser.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a RadiusAuthBackendUser resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUser.isConstruct"></a>

```java
import io.cdktn.providers.vault.radius_auth_backend_user.RadiusAuthBackendUser;

RadiusAuthBackendUser.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUser.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUser.isTerraformElement"></a>

```java
import io.cdktn.providers.vault.radius_auth_backend_user.RadiusAuthBackendUser;

RadiusAuthBackendUser.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUser.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUser.isTerraformResource"></a>

```java
import io.cdktn.providers.vault.radius_auth_backend_user.RadiusAuthBackendUser;

RadiusAuthBackendUser.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUser.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUser.generateConfigForImport"></a>

```java
import io.cdktn.providers.vault.radius_auth_backend_user.RadiusAuthBackendUser;

RadiusAuthBackendUser.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),RadiusAuthBackendUser.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a RadiusAuthBackendUser resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUser.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUser.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the RadiusAuthBackendUser to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUser.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing RadiusAuthBackendUser that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/radius_auth_backend_user#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUser.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the RadiusAuthBackendUser to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUser.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUser.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUser.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUser.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUser.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUser.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUser.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUser.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUser.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUser.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUser.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUser.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUser.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUser.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUser.property.mountInput">mountInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUser.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUser.property.policiesInput">policiesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUser.property.usernameInput">usernameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUser.property.mount">mount</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUser.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUser.property.policies">policies</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUser.property.username">username</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUser.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUser.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUser.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUser.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUser.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUser.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUser.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUser.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUser.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUser.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUser.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUser.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUser.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUser.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `mountInput`<sup>Optional</sup> <a name="mountInput" id="@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUser.property.mountInput"></a>

```java
public java.lang.String getMountInput();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUser.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `policiesInput`<sup>Optional</sup> <a name="policiesInput" id="@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUser.property.policiesInput"></a>

```java
public java.util.List<java.lang.String> getPoliciesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUser.property.usernameInput"></a>

```java
public java.lang.String getUsernameInput();
```

- *Type:* java.lang.String

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUser.property.mount"></a>

```java
public java.lang.String getMount();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUser.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `policies`<sup>Required</sup> <a name="policies" id="@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUser.property.policies"></a>

```java
public java.util.List<java.lang.String> getPolicies();
```

- *Type:* java.util.List<java.lang.String>

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUser.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUser.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUser.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### RadiusAuthBackendUserConfig <a name="RadiusAuthBackendUserConfig" id="@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUserConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUserConfig.Initializer"></a>

```java
import io.cdktn.providers.vault.radius_auth_backend_user.RadiusAuthBackendUserConfig;

RadiusAuthBackendUserConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .mount(java.lang.String)
    .username(java.lang.String)
//  .namespace(java.lang.String)
//  .policies(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUserConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUserConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUserConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUserConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUserConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUserConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUserConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUserConfig.property.mount">mount</a></code> | <code>java.lang.String</code> | Path to the RADIUS auth mount where the user will be registered. |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUserConfig.property.username">username</a></code> | <code>java.lang.String</code> | The username to register with the RADIUS auth backend. |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUserConfig.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUserConfig.property.policies">policies</a></code> | <code>java.util.List<java.lang.String></code> | A set of Vault policies to associate with this user. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUserConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUserConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUserConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUserConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUserConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUserConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUserConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUserConfig.property.mount"></a>

```java
public java.lang.String getMount();
```

- *Type:* java.lang.String

Path to the RADIUS auth mount where the user will be registered.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/radius_auth_backend_user#mount RadiusAuthBackendUser#mount}

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUserConfig.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

The username to register with the RADIUS auth backend.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/radius_auth_backend_user#username RadiusAuthBackendUser#username}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUserConfig.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/radius_auth_backend_user#namespace RadiusAuthBackendUser#namespace}

---

##### `policies`<sup>Optional</sup> <a name="policies" id="@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUserConfig.property.policies"></a>

```java
public java.util.List<java.lang.String> getPolicies();
```

- *Type:* java.util.List<java.lang.String>

A set of Vault policies to associate with this user.

If not set, only the `default` policy will be applicable to the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/radius_auth_backend_user#policies RadiusAuthBackendUser#policies}

---



