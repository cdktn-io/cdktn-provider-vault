# `quotaConfig` Submodule <a name="`quotaConfig` Submodule" id="@cdktn/provider-vault.quotaConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### QuotaConfig <a name="QuotaConfig" id="@cdktn/provider-vault.quotaConfig.QuotaConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/quota_config vault_quota_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.Initializer"></a>

```java
import io.cdktn.providers.vault.quota_config.QuotaConfig;

QuotaConfig.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .absoluteRateLimitExemptPaths(java.util.List<java.lang.String>)
//  .enableRateLimitAuditLogging(java.lang.Boolean|IResolvable)
//  .enableRateLimitResponseHeaders(java.lang.Boolean|IResolvable)
//  .namespace(java.lang.String)
//  .rateLimitExemptPaths(java.util.List<java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.Initializer.parameter.absoluteRateLimitExemptPaths">absoluteRateLimitExemptPaths</a></code> | <code>java.util.List<java.lang.String></code> | Absolute paths exempt from all rate limit quotas, qualified from the root of the namespace hierarchy. |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.Initializer.parameter.enableRateLimitAuditLogging">enableRateLimitAuditLogging</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Enables audit logging for requests rejected by rate limit quotas. |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.Initializer.parameter.enableRateLimitResponseHeaders">enableRateLimitResponseHeaders</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Enables rate limit response headers on HTTP responses. |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.Initializer.parameter.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.Initializer.parameter.rateLimitExemptPaths">rateLimitExemptPaths</a></code> | <code>java.util.List<java.lang.String></code> | Paths exempt from rate limit quotas relative to the current namespace context. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `absoluteRateLimitExemptPaths`<sup>Optional</sup> <a name="absoluteRateLimitExemptPaths" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.Initializer.parameter.absoluteRateLimitExemptPaths"></a>

- *Type:* java.util.List<java.lang.String>

Absolute paths exempt from all rate limit quotas, qualified from the root of the namespace hierarchy.

This field is effectively root-managed; administrative namespaces can read returned values but cannot reliably manage them. Order is not significant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/quota_config#absolute_rate_limit_exempt_paths QuotaConfig#absolute_rate_limit_exempt_paths}

---

##### `enableRateLimitAuditLogging`<sup>Optional</sup> <a name="enableRateLimitAuditLogging" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.Initializer.parameter.enableRateLimitAuditLogging"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Enables audit logging for requests rejected by rate limit quotas.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/quota_config#enable_rate_limit_audit_logging QuotaConfig#enable_rate_limit_audit_logging}

---

##### `enableRateLimitResponseHeaders`<sup>Optional</sup> <a name="enableRateLimitResponseHeaders" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.Initializer.parameter.enableRateLimitResponseHeaders"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Enables rate limit response headers on HTTP responses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/quota_config#enable_rate_limit_response_headers QuotaConfig#enable_rate_limit_response_headers}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.Initializer.parameter.namespace"></a>

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/quota_config#namespace QuotaConfig#namespace}

---

##### `rateLimitExemptPaths`<sup>Optional</sup> <a name="rateLimitExemptPaths" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.Initializer.parameter.rateLimitExemptPaths"></a>

- *Type:* java.util.List<java.lang.String>

Paths exempt from rate limit quotas relative to the current namespace context.

This endpoint is only callable from the root or an administrative namespace, and exemption updates are effectively root-managed. Order is not significant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/quota_config#rate_limit_exempt_paths QuotaConfig#rate_limit_exempt_paths}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.resetAbsoluteRateLimitExemptPaths">resetAbsoluteRateLimitExemptPaths</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.resetEnableRateLimitAuditLogging">resetEnableRateLimitAuditLogging</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.resetEnableRateLimitResponseHeaders">resetEnableRateLimitResponseHeaders</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.resetRateLimitExemptPaths">resetRateLimitExemptPaths</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetAbsoluteRateLimitExemptPaths` <a name="resetAbsoluteRateLimitExemptPaths" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.resetAbsoluteRateLimitExemptPaths"></a>

```java
public void resetAbsoluteRateLimitExemptPaths()
```

##### `resetEnableRateLimitAuditLogging` <a name="resetEnableRateLimitAuditLogging" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.resetEnableRateLimitAuditLogging"></a>

```java
public void resetEnableRateLimitAuditLogging()
```

##### `resetEnableRateLimitResponseHeaders` <a name="resetEnableRateLimitResponseHeaders" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.resetEnableRateLimitResponseHeaders"></a>

```java
public void resetEnableRateLimitResponseHeaders()
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.resetNamespace"></a>

```java
public void resetNamespace()
```

##### `resetRateLimitExemptPaths` <a name="resetRateLimitExemptPaths" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.resetRateLimitExemptPaths"></a>

```java
public void resetRateLimitExemptPaths()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a QuotaConfig resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.isConstruct"></a>

```java
import io.cdktn.providers.vault.quota_config.QuotaConfig;

QuotaConfig.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.isTerraformElement"></a>

```java
import io.cdktn.providers.vault.quota_config.QuotaConfig;

QuotaConfig.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.isTerraformResource"></a>

```java
import io.cdktn.providers.vault.quota_config.QuotaConfig;

QuotaConfig.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.generateConfigForImport"></a>

```java
import io.cdktn.providers.vault.quota_config.QuotaConfig;

QuotaConfig.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),QuotaConfig.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a QuotaConfig resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the QuotaConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing QuotaConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/quota_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the QuotaConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.property.absoluteRateLimitExemptPathsInput">absoluteRateLimitExemptPathsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.property.enableRateLimitAuditLoggingInput">enableRateLimitAuditLoggingInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.property.enableRateLimitResponseHeadersInput">enableRateLimitResponseHeadersInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.property.rateLimitExemptPathsInput">rateLimitExemptPathsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.property.absoluteRateLimitExemptPaths">absoluteRateLimitExemptPaths</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.property.enableRateLimitAuditLogging">enableRateLimitAuditLogging</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.property.enableRateLimitResponseHeaders">enableRateLimitResponseHeaders</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.property.rateLimitExemptPaths">rateLimitExemptPaths</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `absoluteRateLimitExemptPathsInput`<sup>Optional</sup> <a name="absoluteRateLimitExemptPathsInput" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.property.absoluteRateLimitExemptPathsInput"></a>

```java
public java.util.List<java.lang.String> getAbsoluteRateLimitExemptPathsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `enableRateLimitAuditLoggingInput`<sup>Optional</sup> <a name="enableRateLimitAuditLoggingInput" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.property.enableRateLimitAuditLoggingInput"></a>

```java
public java.lang.Boolean|IResolvable getEnableRateLimitAuditLoggingInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `enableRateLimitResponseHeadersInput`<sup>Optional</sup> <a name="enableRateLimitResponseHeadersInput" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.property.enableRateLimitResponseHeadersInput"></a>

```java
public java.lang.Boolean|IResolvable getEnableRateLimitResponseHeadersInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `rateLimitExemptPathsInput`<sup>Optional</sup> <a name="rateLimitExemptPathsInput" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.property.rateLimitExemptPathsInput"></a>

```java
public java.util.List<java.lang.String> getRateLimitExemptPathsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `absoluteRateLimitExemptPaths`<sup>Required</sup> <a name="absoluteRateLimitExemptPaths" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.property.absoluteRateLimitExemptPaths"></a>

```java
public java.util.List<java.lang.String> getAbsoluteRateLimitExemptPaths();
```

- *Type:* java.util.List<java.lang.String>

---

##### `enableRateLimitAuditLogging`<sup>Required</sup> <a name="enableRateLimitAuditLogging" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.property.enableRateLimitAuditLogging"></a>

```java
public java.lang.Boolean|IResolvable getEnableRateLimitAuditLogging();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `enableRateLimitResponseHeaders`<sup>Required</sup> <a name="enableRateLimitResponseHeaders" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.property.enableRateLimitResponseHeaders"></a>

```java
public java.lang.Boolean|IResolvable getEnableRateLimitResponseHeaders();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `rateLimitExemptPaths`<sup>Required</sup> <a name="rateLimitExemptPaths" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.property.rateLimitExemptPaths"></a>

```java
public java.util.List<java.lang.String> getRateLimitExemptPaths();
```

- *Type:* java.util.List<java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### QuotaConfigConfig <a name="QuotaConfigConfig" id="@cdktn/provider-vault.quotaConfig.QuotaConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.quotaConfig.QuotaConfigConfig.Initializer"></a>

```java
import io.cdktn.providers.vault.quota_config.QuotaConfigConfig;

QuotaConfigConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .absoluteRateLimitExemptPaths(java.util.List<java.lang.String>)
//  .enableRateLimitAuditLogging(java.lang.Boolean|IResolvable)
//  .enableRateLimitResponseHeaders(java.lang.Boolean|IResolvable)
//  .namespace(java.lang.String)
//  .rateLimitExemptPaths(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfigConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfigConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfigConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfigConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfigConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfigConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfigConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfigConfig.property.absoluteRateLimitExemptPaths">absoluteRateLimitExemptPaths</a></code> | <code>java.util.List<java.lang.String></code> | Absolute paths exempt from all rate limit quotas, qualified from the root of the namespace hierarchy. |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfigConfig.property.enableRateLimitAuditLogging">enableRateLimitAuditLogging</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Enables audit logging for requests rejected by rate limit quotas. |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfigConfig.property.enableRateLimitResponseHeaders">enableRateLimitResponseHeaders</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Enables rate limit response headers on HTTP responses. |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfigConfig.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfigConfig.property.rateLimitExemptPaths">rateLimitExemptPaths</a></code> | <code>java.util.List<java.lang.String></code> | Paths exempt from rate limit quotas relative to the current namespace context. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.quotaConfig.QuotaConfigConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.quotaConfig.QuotaConfigConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.quotaConfig.QuotaConfigConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.quotaConfig.QuotaConfigConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.quotaConfig.QuotaConfigConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.quotaConfig.QuotaConfigConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.quotaConfig.QuotaConfigConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `absoluteRateLimitExemptPaths`<sup>Optional</sup> <a name="absoluteRateLimitExemptPaths" id="@cdktn/provider-vault.quotaConfig.QuotaConfigConfig.property.absoluteRateLimitExemptPaths"></a>

```java
public java.util.List<java.lang.String> getAbsoluteRateLimitExemptPaths();
```

- *Type:* java.util.List<java.lang.String>

Absolute paths exempt from all rate limit quotas, qualified from the root of the namespace hierarchy.

This field is effectively root-managed; administrative namespaces can read returned values but cannot reliably manage them. Order is not significant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/quota_config#absolute_rate_limit_exempt_paths QuotaConfig#absolute_rate_limit_exempt_paths}

---

##### `enableRateLimitAuditLogging`<sup>Optional</sup> <a name="enableRateLimitAuditLogging" id="@cdktn/provider-vault.quotaConfig.QuotaConfigConfig.property.enableRateLimitAuditLogging"></a>

```java
public java.lang.Boolean|IResolvable getEnableRateLimitAuditLogging();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Enables audit logging for requests rejected by rate limit quotas.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/quota_config#enable_rate_limit_audit_logging QuotaConfig#enable_rate_limit_audit_logging}

---

##### `enableRateLimitResponseHeaders`<sup>Optional</sup> <a name="enableRateLimitResponseHeaders" id="@cdktn/provider-vault.quotaConfig.QuotaConfigConfig.property.enableRateLimitResponseHeaders"></a>

```java
public java.lang.Boolean|IResolvable getEnableRateLimitResponseHeaders();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Enables rate limit response headers on HTTP responses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/quota_config#enable_rate_limit_response_headers QuotaConfig#enable_rate_limit_response_headers}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.quotaConfig.QuotaConfigConfig.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/quota_config#namespace QuotaConfig#namespace}

---

##### `rateLimitExemptPaths`<sup>Optional</sup> <a name="rateLimitExemptPaths" id="@cdktn/provider-vault.quotaConfig.QuotaConfigConfig.property.rateLimitExemptPaths"></a>

```java
public java.util.List<java.lang.String> getRateLimitExemptPaths();
```

- *Type:* java.util.List<java.lang.String>

Paths exempt from rate limit quotas relative to the current namespace context.

This endpoint is only callable from the root or an administrative namespace, and exemption updates are effectively root-managed. Order is not significant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/quota_config#rate_limit_exempt_paths QuotaConfig#rate_limit_exempt_paths}

---



