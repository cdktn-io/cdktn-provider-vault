# `quotaConfig` Submodule <a name="`quotaConfig` Submodule" id="@cdktn/provider-vault.quotaConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### QuotaConfig <a name="QuotaConfig" id="@cdktn/provider-vault.quotaConfig.QuotaConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/quota_config vault_quota_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Vault;

new QuotaConfig(Construct Scope, string Id, QuotaConfigConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfigConfig">QuotaConfigConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-vault.quotaConfig.QuotaConfigConfig">QuotaConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.resetAbsoluteRateLimitExemptPaths">ResetAbsoluteRateLimitExemptPaths</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.resetEnableRateLimitAuditLogging">ResetEnableRateLimitAuditLogging</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.resetEnableRateLimitResponseHeaders">ResetEnableRateLimitResponseHeaders</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.resetRateLimitExemptPaths">ResetRateLimitExemptPaths</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetAbsoluteRateLimitExemptPaths` <a name="ResetAbsoluteRateLimitExemptPaths" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.resetAbsoluteRateLimitExemptPaths"></a>

```csharp
private void ResetAbsoluteRateLimitExemptPaths()
```

##### `ResetEnableRateLimitAuditLogging` <a name="ResetEnableRateLimitAuditLogging" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.resetEnableRateLimitAuditLogging"></a>

```csharp
private void ResetEnableRateLimitAuditLogging()
```

##### `ResetEnableRateLimitResponseHeaders` <a name="ResetEnableRateLimitResponseHeaders" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.resetEnableRateLimitResponseHeaders"></a>

```csharp
private void ResetEnableRateLimitResponseHeaders()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.resetNamespace"></a>

```csharp
private void ResetNamespace()
```

##### `ResetRateLimitExemptPaths` <a name="ResetRateLimitExemptPaths" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.resetRateLimitExemptPaths"></a>

```csharp
private void ResetRateLimitExemptPaths()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a QuotaConfig resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Vault;

QuotaConfig.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Vault;

QuotaConfig.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Vault;

QuotaConfig.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Vault;

QuotaConfig.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a QuotaConfig resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the QuotaConfig to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing QuotaConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/quota_config#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the QuotaConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.property.absoluteRateLimitExemptPathsInput">AbsoluteRateLimitExemptPathsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.property.enableRateLimitAuditLoggingInput">EnableRateLimitAuditLoggingInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.property.enableRateLimitResponseHeadersInput">EnableRateLimitResponseHeadersInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.property.rateLimitExemptPathsInput">RateLimitExemptPathsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.property.absoluteRateLimitExemptPaths">AbsoluteRateLimitExemptPaths</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.property.enableRateLimitAuditLogging">EnableRateLimitAuditLogging</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.property.enableRateLimitResponseHeaders">EnableRateLimitResponseHeaders</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.property.rateLimitExemptPaths">RateLimitExemptPaths</a></code> | <code>string[]</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AbsoluteRateLimitExemptPathsInput`<sup>Optional</sup> <a name="AbsoluteRateLimitExemptPathsInput" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.property.absoluteRateLimitExemptPathsInput"></a>

```csharp
public string[] AbsoluteRateLimitExemptPathsInput { get; }
```

- *Type:* string[]

---

##### `EnableRateLimitAuditLoggingInput`<sup>Optional</sup> <a name="EnableRateLimitAuditLoggingInput" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.property.enableRateLimitAuditLoggingInput"></a>

```csharp
public bool|IResolvable EnableRateLimitAuditLoggingInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `EnableRateLimitResponseHeadersInput`<sup>Optional</sup> <a name="EnableRateLimitResponseHeadersInput" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.property.enableRateLimitResponseHeadersInput"></a>

```csharp
public bool|IResolvable EnableRateLimitResponseHeadersInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `RateLimitExemptPathsInput`<sup>Optional</sup> <a name="RateLimitExemptPathsInput" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.property.rateLimitExemptPathsInput"></a>

```csharp
public string[] RateLimitExemptPathsInput { get; }
```

- *Type:* string[]

---

##### `AbsoluteRateLimitExemptPaths`<sup>Required</sup> <a name="AbsoluteRateLimitExemptPaths" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.property.absoluteRateLimitExemptPaths"></a>

```csharp
public string[] AbsoluteRateLimitExemptPaths { get; }
```

- *Type:* string[]

---

##### `EnableRateLimitAuditLogging`<sup>Required</sup> <a name="EnableRateLimitAuditLogging" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.property.enableRateLimitAuditLogging"></a>

```csharp
public bool|IResolvable EnableRateLimitAuditLogging { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `EnableRateLimitResponseHeaders`<sup>Required</sup> <a name="EnableRateLimitResponseHeaders" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.property.enableRateLimitResponseHeaders"></a>

```csharp
public bool|IResolvable EnableRateLimitResponseHeaders { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `RateLimitExemptPaths`<sup>Required</sup> <a name="RateLimitExemptPaths" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.property.rateLimitExemptPaths"></a>

```csharp
public string[] RateLimitExemptPaths { get; }
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### QuotaConfigConfig <a name="QuotaConfigConfig" id="@cdktn/provider-vault.quotaConfig.QuotaConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.quotaConfig.QuotaConfigConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Vault;

new QuotaConfigConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string[] AbsoluteRateLimitExemptPaths = null,
    bool|IResolvable EnableRateLimitAuditLogging = null,
    bool|IResolvable EnableRateLimitResponseHeaders = null,
    string Namespace = null,
    string[] RateLimitExemptPaths = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfigConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfigConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfigConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfigConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfigConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfigConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfigConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfigConfig.property.absoluteRateLimitExemptPaths">AbsoluteRateLimitExemptPaths</a></code> | <code>string[]</code> | Absolute paths exempt from all rate limit quotas, qualified from the root of the namespace hierarchy. |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfigConfig.property.enableRateLimitAuditLogging">EnableRateLimitAuditLogging</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Enables audit logging for requests rejected by rate limit quotas. |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfigConfig.property.enableRateLimitResponseHeaders">EnableRateLimitResponseHeaders</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Enables rate limit response headers on HTTP responses. |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfigConfig.property.namespace">Namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfigConfig.property.rateLimitExemptPaths">RateLimitExemptPaths</a></code> | <code>string[]</code> | Paths exempt from rate limit quotas relative to the current namespace context. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-vault.quotaConfig.QuotaConfigConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-vault.quotaConfig.QuotaConfigConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-vault.quotaConfig.QuotaConfigConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-vault.quotaConfig.QuotaConfigConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-vault.quotaConfig.QuotaConfigConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.quotaConfig.QuotaConfigConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-vault.quotaConfig.QuotaConfigConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AbsoluteRateLimitExemptPaths`<sup>Optional</sup> <a name="AbsoluteRateLimitExemptPaths" id="@cdktn/provider-vault.quotaConfig.QuotaConfigConfig.property.absoluteRateLimitExemptPaths"></a>

```csharp
public string[] AbsoluteRateLimitExemptPaths { get; set; }
```

- *Type:* string[]

Absolute paths exempt from all rate limit quotas, qualified from the root of the namespace hierarchy.

This field is effectively root-managed; administrative namespaces can read returned values but cannot reliably manage them. Order is not significant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/quota_config#absolute_rate_limit_exempt_paths QuotaConfig#absolute_rate_limit_exempt_paths}

---

##### `EnableRateLimitAuditLogging`<sup>Optional</sup> <a name="EnableRateLimitAuditLogging" id="@cdktn/provider-vault.quotaConfig.QuotaConfigConfig.property.enableRateLimitAuditLogging"></a>

```csharp
public bool|IResolvable EnableRateLimitAuditLogging { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Enables audit logging for requests rejected by rate limit quotas.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/quota_config#enable_rate_limit_audit_logging QuotaConfig#enable_rate_limit_audit_logging}

---

##### `EnableRateLimitResponseHeaders`<sup>Optional</sup> <a name="EnableRateLimitResponseHeaders" id="@cdktn/provider-vault.quotaConfig.QuotaConfigConfig.property.enableRateLimitResponseHeaders"></a>

```csharp
public bool|IResolvable EnableRateLimitResponseHeaders { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Enables rate limit response headers on HTTP responses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/quota_config#enable_rate_limit_response_headers QuotaConfig#enable_rate_limit_response_headers}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktn/provider-vault.quotaConfig.QuotaConfigConfig.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/quota_config#namespace QuotaConfig#namespace}

---

##### `RateLimitExemptPaths`<sup>Optional</sup> <a name="RateLimitExemptPaths" id="@cdktn/provider-vault.quotaConfig.QuotaConfigConfig.property.rateLimitExemptPaths"></a>

```csharp
public string[] RateLimitExemptPaths { get; set; }
```

- *Type:* string[]

Paths exempt from rate limit quotas relative to the current namespace context.

This endpoint is only callable from the root or an administrative namespace, and exemption updates are effectively root-managed. Order is not significant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/quota_config#rate_limit_exempt_paths QuotaConfig#rate_limit_exempt_paths}

---



