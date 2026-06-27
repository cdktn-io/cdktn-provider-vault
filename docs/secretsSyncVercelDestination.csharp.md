# `secretsSyncVercelDestination` Submodule <a name="`secretsSyncVercelDestination` Submodule" id="@cdktn/provider-vault.secretsSyncVercelDestination"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SecretsSyncVercelDestination <a name="SecretsSyncVercelDestination" id="@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/secrets_sync_vercel_destination vault_secrets_sync_vercel_destination}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Vault;

new SecretsSyncVercelDestination(Construct Scope, string Id, SecretsSyncVercelDestinationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestinationConfig">SecretsSyncVercelDestinationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestinationConfig">SecretsSyncVercelDestinationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.resetAllowedIpv4Addresses">ResetAllowedIpv4Addresses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.resetAllowedIpv6Addresses">ResetAllowedIpv6Addresses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.resetAllowedPorts">ResetAllowedPorts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.resetDisableStrictNetworking">ResetDisableStrictNetworking</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.resetGranularity">ResetGranularity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.resetSecretNameTemplate">ResetSecretNameTemplate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.resetTeamId">ResetTeamId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetAllowedIpv4Addresses` <a name="ResetAllowedIpv4Addresses" id="@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.resetAllowedIpv4Addresses"></a>

```csharp
private void ResetAllowedIpv4Addresses()
```

##### `ResetAllowedIpv6Addresses` <a name="ResetAllowedIpv6Addresses" id="@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.resetAllowedIpv6Addresses"></a>

```csharp
private void ResetAllowedIpv6Addresses()
```

##### `ResetAllowedPorts` <a name="ResetAllowedPorts" id="@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.resetAllowedPorts"></a>

```csharp
private void ResetAllowedPorts()
```

##### `ResetDisableStrictNetworking` <a name="ResetDisableStrictNetworking" id="@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.resetDisableStrictNetworking"></a>

```csharp
private void ResetDisableStrictNetworking()
```

##### `ResetGranularity` <a name="ResetGranularity" id="@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.resetGranularity"></a>

```csharp
private void ResetGranularity()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.resetNamespace"></a>

```csharp
private void ResetNamespace()
```

##### `ResetSecretNameTemplate` <a name="ResetSecretNameTemplate" id="@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.resetSecretNameTemplate"></a>

```csharp
private void ResetSecretNameTemplate()
```

##### `ResetTeamId` <a name="ResetTeamId" id="@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.resetTeamId"></a>

```csharp
private void ResetTeamId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a SecretsSyncVercelDestination resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Vault;

SecretsSyncVercelDestination.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Vault;

SecretsSyncVercelDestination.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Vault;

SecretsSyncVercelDestination.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Vault;

SecretsSyncVercelDestination.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a SecretsSyncVercelDestination resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SecretsSyncVercelDestination to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SecretsSyncVercelDestination that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/secrets_sync_vercel_destination#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the SecretsSyncVercelDestination to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.property.accessTokenInput">AccessTokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.property.allowedIpv4AddressesInput">AllowedIpv4AddressesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.property.allowedIpv6AddressesInput">AllowedIpv6AddressesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.property.allowedPortsInput">AllowedPortsInput</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.property.deploymentEnvironmentsInput">DeploymentEnvironmentsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.property.disableStrictNetworkingInput">DisableStrictNetworkingInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.property.granularityInput">GranularityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.property.projectIdInput">ProjectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.property.secretNameTemplateInput">SecretNameTemplateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.property.teamIdInput">TeamIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.property.accessToken">AccessToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.property.allowedIpv4Addresses">AllowedIpv4Addresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.property.allowedIpv6Addresses">AllowedIpv6Addresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.property.allowedPorts">AllowedPorts</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.property.deploymentEnvironments">DeploymentEnvironments</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.property.disableStrictNetworking">DisableStrictNetworking</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.property.granularity">Granularity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.property.projectId">ProjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.property.secretNameTemplate">SecretNameTemplate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.property.teamId">TeamId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `AccessTokenInput`<sup>Optional</sup> <a name="AccessTokenInput" id="@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.property.accessTokenInput"></a>

```csharp
public string AccessTokenInput { get; }
```

- *Type:* string

---

##### `AllowedIpv4AddressesInput`<sup>Optional</sup> <a name="AllowedIpv4AddressesInput" id="@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.property.allowedIpv4AddressesInput"></a>

```csharp
public string[] AllowedIpv4AddressesInput { get; }
```

- *Type:* string[]

---

##### `AllowedIpv6AddressesInput`<sup>Optional</sup> <a name="AllowedIpv6AddressesInput" id="@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.property.allowedIpv6AddressesInput"></a>

```csharp
public string[] AllowedIpv6AddressesInput { get; }
```

- *Type:* string[]

---

##### `AllowedPortsInput`<sup>Optional</sup> <a name="AllowedPortsInput" id="@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.property.allowedPortsInput"></a>

```csharp
public double[] AllowedPortsInput { get; }
```

- *Type:* double[]

---

##### `DeploymentEnvironmentsInput`<sup>Optional</sup> <a name="DeploymentEnvironmentsInput" id="@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.property.deploymentEnvironmentsInput"></a>

```csharp
public string[] DeploymentEnvironmentsInput { get; }
```

- *Type:* string[]

---

##### `DisableStrictNetworkingInput`<sup>Optional</sup> <a name="DisableStrictNetworkingInput" id="@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.property.disableStrictNetworkingInput"></a>

```csharp
public bool|IResolvable DisableStrictNetworkingInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `GranularityInput`<sup>Optional</sup> <a name="GranularityInput" id="@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.property.granularityInput"></a>

```csharp
public string GranularityInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.property.projectIdInput"></a>

```csharp
public string ProjectIdInput { get; }
```

- *Type:* string

---

##### `SecretNameTemplateInput`<sup>Optional</sup> <a name="SecretNameTemplateInput" id="@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.property.secretNameTemplateInput"></a>

```csharp
public string SecretNameTemplateInput { get; }
```

- *Type:* string

---

##### `TeamIdInput`<sup>Optional</sup> <a name="TeamIdInput" id="@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.property.teamIdInput"></a>

```csharp
public string TeamIdInput { get; }
```

- *Type:* string

---

##### `AccessToken`<sup>Required</sup> <a name="AccessToken" id="@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.property.accessToken"></a>

```csharp
public string AccessToken { get; }
```

- *Type:* string

---

##### `AllowedIpv4Addresses`<sup>Required</sup> <a name="AllowedIpv4Addresses" id="@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.property.allowedIpv4Addresses"></a>

```csharp
public string[] AllowedIpv4Addresses { get; }
```

- *Type:* string[]

---

##### `AllowedIpv6Addresses`<sup>Required</sup> <a name="AllowedIpv6Addresses" id="@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.property.allowedIpv6Addresses"></a>

```csharp
public string[] AllowedIpv6Addresses { get; }
```

- *Type:* string[]

---

##### `AllowedPorts`<sup>Required</sup> <a name="AllowedPorts" id="@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.property.allowedPorts"></a>

```csharp
public double[] AllowedPorts { get; }
```

- *Type:* double[]

---

##### `DeploymentEnvironments`<sup>Required</sup> <a name="DeploymentEnvironments" id="@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.property.deploymentEnvironments"></a>

```csharp
public string[] DeploymentEnvironments { get; }
```

- *Type:* string[]

---

##### `DisableStrictNetworking`<sup>Required</sup> <a name="DisableStrictNetworking" id="@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.property.disableStrictNetworking"></a>

```csharp
public bool|IResolvable DisableStrictNetworking { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Granularity`<sup>Required</sup> <a name="Granularity" id="@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.property.granularity"></a>

```csharp
public string Granularity { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.property.projectId"></a>

```csharp
public string ProjectId { get; }
```

- *Type:* string

---

##### `SecretNameTemplate`<sup>Required</sup> <a name="SecretNameTemplate" id="@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.property.secretNameTemplate"></a>

```csharp
public string SecretNameTemplate { get; }
```

- *Type:* string

---

##### `TeamId`<sup>Required</sup> <a name="TeamId" id="@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.property.teamId"></a>

```csharp
public string TeamId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SecretsSyncVercelDestinationConfig <a name="SecretsSyncVercelDestinationConfig" id="@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestinationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestinationConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Vault;

new SecretsSyncVercelDestinationConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string AccessToken,
    string[] DeploymentEnvironments,
    string Name,
    string ProjectId,
    string[] AllowedIpv4Addresses = null,
    string[] AllowedIpv6Addresses = null,
    double[] AllowedPorts = null,
    bool|IResolvable DisableStrictNetworking = null,
    string Granularity = null,
    string Id = null,
    string Namespace = null,
    string SecretNameTemplate = null,
    string TeamId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestinationConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestinationConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestinationConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestinationConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestinationConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestinationConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestinationConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestinationConfig.property.accessToken">AccessToken</a></code> | <code>string</code> | Vercel API access token with the permissions to manage environment variables. |
| <code><a href="#@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestinationConfig.property.deploymentEnvironments">DeploymentEnvironments</a></code> | <code>string[]</code> | Deployment environments where the environment variables are available. Accepts 'development', 'preview' & 'production'. |
| <code><a href="#@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestinationConfig.property.name">Name</a></code> | <code>string</code> | Unique name of the Vercel destination. |
| <code><a href="#@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestinationConfig.property.projectId">ProjectId</a></code> | <code>string</code> | Project ID where to manage environment variables. |
| <code><a href="#@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestinationConfig.property.allowedIpv4Addresses">AllowedIpv4Addresses</a></code> | <code>string[]</code> | Set of allowed IPv4 addresses in CIDR notation (e.g., 192.168.1.1/32) for outbound connections from Vault to the destination. If not set, all IPv4 addresses are allowed. |
| <code><a href="#@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestinationConfig.property.allowedIpv6Addresses">AllowedIpv6Addresses</a></code> | <code>string[]</code> | Set of allowed IPv6 addresses in CIDR notation (e.g., 2001:db8::1/128) for outbound connections from Vault to the destination. If not set, all IPv6 addresses are allowed. |
| <code><a href="#@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestinationConfig.property.allowedPorts">AllowedPorts</a></code> | <code>double[]</code> | Set of allowed ports for outbound connections from Vault to the destination. If not set, all ports are allowed. |
| <code><a href="#@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestinationConfig.property.disableStrictNetworking">DisableStrictNetworking</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | If set to true, disables strict networking enforcement for this destination. |
| <code><a href="#@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestinationConfig.property.granularity">Granularity</a></code> | <code>string</code> | Determines what level of information is synced as a distinct resource at the destination. Can be 'secret-path' or 'secret-key'. |
| <code><a href="#@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestinationConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/secrets_sync_vercel_destination#id SecretsSyncVercelDestination#id}. |
| <code><a href="#@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestinationConfig.property.namespace">Namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestinationConfig.property.secretNameTemplate">SecretNameTemplate</a></code> | <code>string</code> | Template describing how to generate external secret names. |
| <code><a href="#@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestinationConfig.property.teamId">TeamId</a></code> | <code>string</code> | Team ID the project belongs to. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestinationConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestinationConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestinationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestinationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestinationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestinationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestinationConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AccessToken`<sup>Required</sup> <a name="AccessToken" id="@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestinationConfig.property.accessToken"></a>

```csharp
public string AccessToken { get; set; }
```

- *Type:* string

Vercel API access token with the permissions to manage environment variables.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/secrets_sync_vercel_destination#access_token SecretsSyncVercelDestination#access_token}

---

##### `DeploymentEnvironments`<sup>Required</sup> <a name="DeploymentEnvironments" id="@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestinationConfig.property.deploymentEnvironments"></a>

```csharp
public string[] DeploymentEnvironments { get; set; }
```

- *Type:* string[]

Deployment environments where the environment variables are available. Accepts 'development', 'preview' & 'production'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/secrets_sync_vercel_destination#deployment_environments SecretsSyncVercelDestination#deployment_environments}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestinationConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Unique name of the Vercel destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/secrets_sync_vercel_destination#name SecretsSyncVercelDestination#name}

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestinationConfig.property.projectId"></a>

```csharp
public string ProjectId { get; set; }
```

- *Type:* string

Project ID where to manage environment variables.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/secrets_sync_vercel_destination#project_id SecretsSyncVercelDestination#project_id}

---

##### `AllowedIpv4Addresses`<sup>Optional</sup> <a name="AllowedIpv4Addresses" id="@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestinationConfig.property.allowedIpv4Addresses"></a>

```csharp
public string[] AllowedIpv4Addresses { get; set; }
```

- *Type:* string[]

Set of allowed IPv4 addresses in CIDR notation (e.g., 192.168.1.1/32) for outbound connections from Vault to the destination. If not set, all IPv4 addresses are allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/secrets_sync_vercel_destination#allowed_ipv4_addresses SecretsSyncVercelDestination#allowed_ipv4_addresses}

---

##### `AllowedIpv6Addresses`<sup>Optional</sup> <a name="AllowedIpv6Addresses" id="@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestinationConfig.property.allowedIpv6Addresses"></a>

```csharp
public string[] AllowedIpv6Addresses { get; set; }
```

- *Type:* string[]

Set of allowed IPv6 addresses in CIDR notation (e.g., 2001:db8::1/128) for outbound connections from Vault to the destination. If not set, all IPv6 addresses are allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/secrets_sync_vercel_destination#allowed_ipv6_addresses SecretsSyncVercelDestination#allowed_ipv6_addresses}

---

##### `AllowedPorts`<sup>Optional</sup> <a name="AllowedPorts" id="@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestinationConfig.property.allowedPorts"></a>

```csharp
public double[] AllowedPorts { get; set; }
```

- *Type:* double[]

Set of allowed ports for outbound connections from Vault to the destination. If not set, all ports are allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/secrets_sync_vercel_destination#allowed_ports SecretsSyncVercelDestination#allowed_ports}

---

##### `DisableStrictNetworking`<sup>Optional</sup> <a name="DisableStrictNetworking" id="@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestinationConfig.property.disableStrictNetworking"></a>

```csharp
public bool|IResolvable DisableStrictNetworking { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

If set to true, disables strict networking enforcement for this destination.

When disabled, Vault will not enforce allowed IP addresses and ports.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/secrets_sync_vercel_destination#disable_strict_networking SecretsSyncVercelDestination#disable_strict_networking}

---

##### `Granularity`<sup>Optional</sup> <a name="Granularity" id="@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestinationConfig.property.granularity"></a>

```csharp
public string Granularity { get; set; }
```

- *Type:* string

Determines what level of information is synced as a distinct resource at the destination. Can be 'secret-path' or 'secret-key'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/secrets_sync_vercel_destination#granularity SecretsSyncVercelDestination#granularity}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestinationConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/secrets_sync_vercel_destination#id SecretsSyncVercelDestination#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestinationConfig.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/secrets_sync_vercel_destination#namespace SecretsSyncVercelDestination#namespace}

---

##### `SecretNameTemplate`<sup>Optional</sup> <a name="SecretNameTemplate" id="@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestinationConfig.property.secretNameTemplate"></a>

```csharp
public string SecretNameTemplate { get; set; }
```

- *Type:* string

Template describing how to generate external secret names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/secrets_sync_vercel_destination#secret_name_template SecretsSyncVercelDestination#secret_name_template}

---

##### `TeamId`<sup>Optional</sup> <a name="TeamId" id="@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestinationConfig.property.teamId"></a>

```csharp
public string TeamId { get; set; }
```

- *Type:* string

Team ID the project belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/secrets_sync_vercel_destination#team_id SecretsSyncVercelDestination#team_id}

---



